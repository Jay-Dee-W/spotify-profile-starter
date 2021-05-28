
import './App.css';
import Login from './components/Login'
import {getTokenFromUrl } from './components/Spotify'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo, setToken } from './redux/actions/action';
import { useSelector } from 'react-redux';

function App() {
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


   console.log(userToken)
  // eslint-disable-next-line 
  }, []);

  return <div className="app"><Login /></div>;
  
}

export default App;
