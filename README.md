# Who said it game
[Notes](https://github.com/apretado/startup/blob/main/notes.md)

## Elevator Pitch
In this game, everyone is given the same prompt that they must answer honestly. Everyone will be shown the answers but will not know which player submitted which response. The goal of the game is to correctly guess who submitted which response. Your score is the number of correct guesses **minus** the number of people who correctly guessed your response.

## Design
![Sketch of the user interface incliding the login, a prompt with a box below it to submit a response, drag and drop boxes to match responses to player names, and the score](https://github.com/apretado/startup/blob/main/design.jpg)

## Key features
- All requests over HTTPS
- Simple login
- Ability to start games with other players
- Random prompt shown to everyone at the same time
- Space to fill in your response to the prompt
- Drag-and-drop interface to match each answer to each player
- Score calculated automatically and shown on the leaderboard

## Technologies
- **Authentication**: Users register by choosing a username and password. Authentication is preformed server side. Passwords are never stored in plain text.
- **Database data**: Stores the list of users and their credentials, as well as a list of prompts.
- **WebSocket data**: Each user's responses and scores are broadcast to every other user.

# Startup HTML deliverable
What I modified and added with this deliverable:
(Pure HTML pages with limited functionality)
- Home page
  - Form to join a game
  - Link to my github in the footer
- Lobby page which displays the names of the players who have joined
- Form to prompt the player to respond
- Drop-down menu to guess who said what
- Leaderboard
