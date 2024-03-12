fetch("/api/score")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const li = document.createElement("li");
        li.textContent = `${localStorage.getItem("username")} (you): ${data.score}`
        document.getElementById("scoreboard").appendChild(li);
    });
