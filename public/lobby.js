let socket;

document.getElementById("nameDisplay").textContent = "Your name: " + localStorage.getItem("userName");

// 100% vulnerable to XSS
function appendPlayer(name) {
    const playerList = document.getElementById("playerList");
    const li = document.createElement('li');
    li.textContent = name;
    li.setAttribute('name', name);
    playerList.appendChild(li);
}

function removePlayer(name) {
    const toRemove = document.querySelector(`#playerList li[name="${name}"]`);
    toRemove.parentNode.removeChild(toRemove);
}

// Open webSocket
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
console.log("WebSocket configured");

socket.onopen = (event) => { 
    // Let the server know that you have joined the lobby (todo: authentication)
    socket.send(JSON.stringify({ type: "lobbyJoin", name: localStorage.getItem("userName") }));
    console.log("Name sent");
};

// Alert user when WebSocket closes
socket.onclose = (event) => {
    alert("Websocket connection lost");
};

socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data);
    // Do something depending on what type of message it is
    if (msg.type === "lobbyJoin") {
        appendPlayer(msg.name);
    } else if (msg.type === "lobbyQuit") {
        removePlayer(msg.name);
    }
};