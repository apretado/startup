import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);


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
                    <Route
                        path='/'
                        element={
                        <Login
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                            }}
                        />
                        }
                        exact
                    />
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