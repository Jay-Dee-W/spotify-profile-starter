
import './App.css';
import Login from './components/Login'
import {getTokenFromUrl } from './components/Spotify'
import { useEffect, useState } from 'react';

function App() {
 
  useEffect(() => {
    const hash = getTokenFromUrl();
   
    window.location.hash = "";
    const userToken = hash.access_token;
    if (userToken) {
      setToken(userToken)
    }
   console.log(token)
  // eslint-disable-next-line 
  }, []);

  return <div className="app"><Login /></div>;
  
}

export default App;
