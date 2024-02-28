document.getElementById("nameDisplay").textContent = "Your name: " + localStorage.getItem("username");

setInterval(() => {
    const playerList = document.getElementById("playerList");
    const playerName = "player" + Math.floor(Math.random() * 1000);
    playerList.innerHTML =
      `<li>${playerName}</li>` +
      playerList.innerHTML;
  }, 5000);