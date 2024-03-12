document.addEventListener('DOMContentLoaded', function() {
  const jokeElement = document.createElement("p");
  fetch("https://api.chucknorris.io/jokes/random")
    .then(resonse => resonse.json())
    .then(data => jokeElement.textContent = data.value);
  document.querySelector("main").appendChild(jokeElement);
});

function login() {
    const nameEl = document.querySelector("#username");
    localStorage.setItem("username", nameEl.value);
    window.location.href = "lobby.html";
  }