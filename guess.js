let correctAnswer = "Jack";

function buttonClick(button) {
    if (button.textContent === correctAnswer) {
        button.style.backgroundColor = "#28a745";
    }
    else {
        button.style.backgroundColor = "red";
    }
}

async function guess(button) {
    const data = { guess: button.textContent };
    const response = await fetch("/api/guess", {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    });
    const userGuessedCorrectly = await response.json();

    let pointsEarned = 100;

    // Disable all buttons
    buttonList = document.querySelectorAll("button");
    for (const item of buttonList) {
        item.disabled = true;
    }

    // Correct or incorrect
    if (userGuessedCorrectly) {
        // Turn button green
        button.style.backgroundColor = "#28a745";
        // Notify user
        document.getElementById("options").innerHTML += `<p>Correct! +${pointsEarned} points</p>`;
        localStorage.setItem("score", pointsEarned);
    } else {
        // Turn button red
        button.style.backgroundColor = "red";
        // Notify user
        document.getElementById("options").innerHTML += "<p>Incorrect!</p>";
        localStorage.setItem("score", 0);
    }

    // Continue button
    document.getElementById("options").innerHTML += "<button onclick=\"location.href='scores.html'\">Continue</button>";
}