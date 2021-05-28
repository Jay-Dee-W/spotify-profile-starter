
import './App.css';
import Login from './components/Login'
import {getTokenFromUrl } from './components/Spotify'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from './redux/actions/action';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl();
   
    window.location.hash = "";
    const userToken = hash.access_token;
    if (userToken) {
      dispatch(setToken(userToken))
    }
   console.log(userToken)
  // eslint-disable-next-line 
  }, []);

  return <div className="app"><Login /></div>;
  
}

export default App;
