async function submitAnswer() {
    const answer = document.getElementById('answer')?.value;
    await fetch("/api/answer", {
        method: 'post',
        body: JSON.stringify({ answer: answer }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    window.location.href = "guess.html";
}