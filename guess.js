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

    if (userGuessedCorrectly) {
        document.getElementById("options").innerHTML += "<p>Correct! +100 points</p>";
    } else {
        document.getElementById("options").innerHTML += "<p>Incorrect!</p>";

    }
}