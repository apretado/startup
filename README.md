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

Placeholders for technologies that will be added later:
- *Application data*: The random prompt question, the user name, and the score
- *Authentication*: A login form using the join code
- *Database data*: The leaderboard
- *Websocket data*: The lobby which shows live the names of the players who have joined

## Things I've learned about DNS
Record types:
```A```: IPV4 adress record
```NS```: Names of the authoritative Name Servers that authorize you to place DNS records in this DNS server
```SOA```: (Start Of Authority) provides contact information about the owner of this domain name

# CSS deliverable
- Header and footer that are responsive to window resizing
- Styled navigation elements, buttons and input fields
- Styled image, text and application elements
I also learned more about how to use flexbox through trial and error.

## Some things I've learned
CSS combinators:
- ```body section```: 	Any section that is a descendant of a body
- ```section > p```: 	Any p that is a direct child of a section
- ```div ~ p```: 	Any p that has a div sibling
- ```div + p```: 	Any p that has an adjacent div sibling
CSS selectors:
- ```.summary```: Anything with ```class="summary"```
- ```p.summary```: Any p with ```class="summary"```
- ```#physics``` Specific element with ```id="physics"```
- ```a[href]```: ```a``` element with attribute ```href```
- ```a[href="./fish.png"]```: required value
- ```p[href*="https://"]```: value contains text
- ```section: hover```: pseudo selector

# JavaScript notes

## Arrays

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

## JSON
Data types:
- string: 	"crockford"
- number: 	42
- boolean: 	true
- array: 	[null,42,"crockford"]
- object: 	{"a":1,"b":"crockford"}
- null: 	null
Example:
```
"class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
- ```JSON.stringify(obj)```: Convert object to JSON
- ```JSON.parse(json)```: Convert JSON to object

## Objects
Example:

```const obj = {
  a: 3,
  b: 'fish',
};
```

- ```obj.prop``` or ```obj['prop']```: Access property
- ```Object.entries(obj)```: Array of key value pairs
- ```Object.keys(obj)```: Array of keys
- ```Object.values(obj)```: Array of values


## DOM
- ```document.querySelector('div');```: Select elements with CSS selector
- ```.textContent```: Text of element (inbetween element tags)
- ```document.querySelectorAll('p');```: List of all matching elements
- ```const newChild = document.createElement('div');```: Create new element on the DOM document
- ```document.querySelector(parentSelector).appendChild(newChild)```: Insert element into DOM tree
- ```document.querySelector(elementSelector).parentElement.removeChild(document.querySelector(elementSelector));```: Remove element (call ```removeChild``` on parent element)
- ```document.querySelector('div').innerHTML = '<div>Foo</div>'```: replace (inject) html in first ```div``` element.
- ```document.querySelector('#submitData').function (event) {console.log(event.type);})```: Event listener

# Javascript deliverable
What I've added in this deliverable:
- JavaScript support for future login: username is stored in localstorage and retrieved from localstorage to be displayed on other pages
- JavaScript support for future database data: Scores are stored in localstorage and displayed in a scoreboard
- JavaScript support for future WebSocket: The lobby simulates players joining in real time by generating player names and adding them to the list of connected players
- JavaScript support for application's interaction logic: Javascript determines if the choice the user makes is correct, modifies the user's score and informs them of it, and highlights the right and wrong answers. A button to continue with the game then appears.

# Service deliverable
What I've added in this deliverable:
- Created an HTTP service using Node.js and Express
- Frontend is now served up using Express static middleware
- Frontend calls third party service endpoints: the login page now displays a joke using the [Chuck Norris Jokes Api](https://api.chucknorris.io/)
- Backend provides service endpoints: ```/api/guess``` and ```/api/score```
- Frontend calls service endpoints: to submit a guess and to get the score
