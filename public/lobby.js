document.getElementById("nameDisplay").textContent = "Your name: " + localStorage.getItem("userName");

// for (let delay = 700; delay < 8000; delay += 2000) {
//     setTimeout(() => {
//     const playerList = document.getElementById("playerList");
//     const playerName = "player" + Math.floor(Math.random() * 1000);
//     playerList.innerHTML = `<li>${playerName}</li>` + playerList.innerHTML;
//     }, delay);
// }

function appendPlayer(name) {
    const playerList = document.getElementById("playerList");
    const li = document.createElement('li');
    li.textContent = escapeHTML(name);
    li.setAttribute('name', escapeHTML(name));
    playerList.appendChild(li);
}

function removePlayer(name) {
    const toRemove = document.querySelector(`#playerList li[name="${escapeHTML(name)}"]`);
    toRemove.parentNode.removeChild(toRemove);
}