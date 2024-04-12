import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from "./login/login";
import { Play } from "./play/play";
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
        <div className='body'>
            <header>
                <nav>
                    <menu>
                        <h1>I know you</h1>
                    </menu>
                </nav>
            </header>
            
            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/play' element={<Play />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <p>Made by Jonathan Thornton</p>
                <a href="https://github.com/apretado/startup">GitHub</a>
            </footer>
            <script src="login.js"></script>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main>404 Page Not Found</main>;
}