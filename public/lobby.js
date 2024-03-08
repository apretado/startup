document.getElementById("nameDisplay").textContent = "Your name: " + localStorage.getItem("username");

for (let delay = 700; delay < 8000; delay += 2000) {
    setTimeout(() => {
    const playerList = document.getElementById("playerList");
    const playerName = "player" + Math.floor(Math.random() * 1000);
    playerList.innerHTML = `<li>${playerName}</li>` + playerList.innerHTML;
    }, delay);
}