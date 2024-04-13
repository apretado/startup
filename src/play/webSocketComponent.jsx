import React, { useState, useEffect } from 'react';

export function WebSocketComponent(props) {
    const [messages, setMessages] = useState([]);
    const [players, setPlayers] = useState([]);
    let socket;

    const appendPlayer = (name) => {
        setPlayers(players => [...players, name]);
    };

    const removePlayer = (name) => {
        setPlayers(players => players.filter(player => player !== name));
    };

    useEffect(() => {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        console.log("WebSocket configured");

        socket.onopen = (event) => { 
            // Let the server know that you have joined the lobby (todo: authentication)
            socket.send(JSON.stringify({ type: "lobbyJoin", name: localStorage.getItem("userName") }));
            console.log("Name sent");
        };

        socket.onmessage = async (event) => {
            const msg = JSON.parse(event.data);
            // Do something depending on what type of message it is
            if (msg.type === "lobbyJoin") {
                appendPlayer(msg.name);
            } else if (msg.type === "lobbyQuit") {
                removePlayer(msg.name);
            }
        };

        // Alert user when WebSocket closes
        socket.onclose = (event) => {
            alert("Websocket connection lost");
        };

        return () => {
        if (socket.readyState === WebSocket.OPEN) {
            socket.close();
        }
        };
    }, []);

return (
    <div>
        Connected players:
      <ul id="playerList">
        <li>{ localStorage.getItem("userName") } (you)</li>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}
