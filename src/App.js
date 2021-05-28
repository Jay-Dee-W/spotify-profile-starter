
import './App.css';
import Login from './components/Login'
import {getTokenFromUrl } from './components/Spotify'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo, setToken } from './redux/actions/action';
import { useSelector } from 'react-redux';
import Profile from './components/Profile'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  let dispatch = useDispatch();
  let state = useSelector(state => state)

  useEffect(() => {
    const hash = getTokenFromUrl();
   
    window.location.hash = "";
    const userToken = hash.access_token;
    if (userToken) {
      dispatch(setToken(userToken))
    }

    dispatch(getUserInfo(state.token))
    setIsLoggedIn(true)
    

   console.log(userToken)
  // eslint-disable-next-line 
  }, []);

  return (
    
     <div className="app">{ isLoggedIn ? <Login /> :  <Profile />}
    </div>
  )
  
}

export default App;
