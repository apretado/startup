const express = require('express');
const app = express();

// Service port
const port = process.argv.ength > 2 ? process.argv[2] : 3000;

// Use JSON body parsing
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScore
apiRouter.get('/score', (_req, res) => {
    res.send(score);
})

// SubmitGuess: response is true if the guess is correct, false otherwise
apiRouter.post('/guess', (req, res) => {
    res.send(submitGuess(req.body));
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


let playerScore = 0;

// The correct answer is hardcoded as 'Jack' for now.
// In the future, the correct answer will be determined by other player's responses
let answer = 'Jack';

function submitGuess(guess) {
    if (guess == answer) {
        playerScore += 100;
        return true;
    }
    return false;
}