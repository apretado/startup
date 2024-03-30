let socket;

document.getElementById("nameDisplay").textContent = "Your name: " + localStorage.getItem("userName");

// for (let delay = 700; delay < 8000; delay += 2000) {
//     setTimeout(() => {
//     const playerList = document.getElementById("playerList");
//     const playerName = "player" + Math.floor(Math.random() * 1000);
//     playerList.innerHTML = `<li>${playerName}</li>` + playerList.innerHTML;
//     }, delay);
// }


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
function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    console.log("WebSocket configured");

    socket.onopen = (event) => { 
        // Let the server know that you have joined the lobby (todo: authentication)
        socket.send(JSON.stringify({ type: "lobbyJoin", name: localStorage.getItem("userName") }));
        console.log("Name sent");
    };

    // Do something when WebSocket closes
    // socket.onclose = (event) => {
    // };

    socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        // Do something depending on what type of message it is
        if (msg.type === "lobbyJoin") {
            appendPlayer(msg.name);
        }
    };
}
configureWebSocket();