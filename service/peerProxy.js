const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
    // Create a websocket object
    const wss = new WebSocketServer({ noServer: true });

  // Handle the protocol upgrade from HTTP to WebSocket
  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  // Keep track of all the connections so we can forward messages
  let connections = [];

  wss.on('connection', (ws) => {
    console.log("WebSocket connection made");
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(connection);

    
    ws.on('message', function message(data) {
      console.log(`Message recieved: ${data}`);
      const message = JSON.parse(data);
      
      // When a user joins the lobby
      if (message.type == "lobbyJoin") {
        // Add their name to their connection ID
        connection.name = message.name;
        // Send everyone else's name
        connections.forEach((c) => {
            if (c.id !== connection.id) {
                connection.ws.send(JSON.stringify({ type: "lobbyJoin", name: c.name }));
              }
        });
      }
      
      // Forward messages to everyone except the sender
      connections.forEach((c) => {
        if (c.id !== connection.id) {
          c.ws.send(JSON.stringify(message));
        }
      });
    });

    
    ws.on('close', () => {
      // Let clients know that someone left 
      connections.forEach((c) => {
        if (c.id !== connection.id) {
          c.ws.send(JSON.stringify({ type: "lobbyQuit", name: connection.name }));
        }
      });

      // Remove the closed connection so we don't try to forward anymore
      const pos = connections.findIndex((o, i) => o.id === connection.id);

      if (pos >= 0) {
        connections.splice(pos, 1);
      }
    });

    // Respond to pong messages by marking the connection alive
    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  // Keep active connections alive
  setInterval(() => {
    connections.forEach((c) => {
      // Kill any connection that didn't respond to the ping last time
      if (!c.alive) {
        c.ws.terminate();
      } else {
        c.alive = false;
        c.ws.ping();
      }
    });
  }, 10000);
}

module.exports = { peerProxy };
