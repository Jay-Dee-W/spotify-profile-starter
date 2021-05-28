
import './App.css';
import Login from './components/Login'
import {getTokenFromUrl ,  loginUrl } from './components/Spotify'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const hash = getTokenFromUrl();
   
    window.location.hash = "";
    const token = hash.access_token;

    // if (_token) {
    //   setToken(_token);
    // }

    console.log(loginUrl);
  }, []);

  return <div className="app"><Login /></div>;
  
}

export default App;
