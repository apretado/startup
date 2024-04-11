import React from 'react';
import './app.css';

export default function App() {
  return (
    <div className='body'>
        <header>
            <nav>
            <menu>
                <h1>I know you</h1>
            </menu>
            </nav>
        </header>
        <main>
            App components go here
            {/* <div id="loginControls" style="display: none">
                <h2>Sign in</h2>
                <label for="username">Username</label>
                <br />
                <input type="text" id="userName" placeholder="Username" />
                <br />
                <label for="name">Password</label>
                <br />
                <input type="password" id="userPassword" placeholder="Password" />
                <br />
                <button onclick="loginUser()">Login</button>
                <button onclick="createUser()">Create</button>
            </div>
            <div id="playControls" style="display: none">
                <div id="playerName"></div>
                <button onclick="play()">Play</button>
                <button onclick="logout()">Logout</button>
            </div> */}
        </main>
        <footer>
            <p>Made by Jonathan Thornton</p>
            <a href="https://github.com/apretado/startup">GitHub</a>
        </footer>
        <script src="login.js"></script>
    </div>
  );
}