let correctAnswer = "Jack";

function buttonClick(button) {
    if (button.textContent === correctAnswer) {
        button.style.backgroundColor = "#28a745";
    }
    else {
        button.style.backgroundColor = "red";
    }
}