let correctAnswer = "Jack";

function buttonClick(button) {
    if (button.textContent === correctAnswer) {
        button.style.backgroundColor = "#28a745";
    }
    else {
        button.style.backgroundColor = "red";
    }
}

function guess(button) {
    userGuessedCorrectly = false;
    let pointsEarned = 100;

    // Loop through every button
    buttonList = document.querySelectorAll("button");
    for (const item of buttonList) {
        // Disable button
        item.disabled = true;

        // If correct
        if (item.textContent === correctAnswer) {
            item.style.backgroundColor = "#28a745";

            // If this is the button the user clicked on
            if (item === button) {
                userGuessedCorrectly = true;
            }
        }

        // If incorrect
        else {
            item.style.backgroundColor = "red";
        }
    }

    // Correct or incorrect
    if (userGuessedCorrectly) {
        document.getElementById("options").innerHTML += `<p>Correct! +${pointsEarned} points</p>`;
        localStorage.setItem("score", pointsEarned);
    } else {
        document.getElementById("options").innerHTML += "<p>Incorrect!</p>";
        localStorage.setItem("score", 0);
    }

    // Continue button
    document.getElementById("options").innerHTML += "<button onclick=\"location.href='scores.html'\">Continue</button>";
}