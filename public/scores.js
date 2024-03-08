const li = document.createElement("li");
li.textContent = `${localStorage.getItem("username")} (you): ${localStorage.getItem("score")}`
document.getElementById("scoreboard").appendChild(li);