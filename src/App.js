
import './App.css';
import Login from './components/Login'
import {getTokenFromUrl } from './components/Spotify'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfo, setToken } from './redux/actions/action';
import { useSelector } from 'react-redux';
import Profile from './components/Profile'
import { BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";


function App() {
  const history = useHistory()
  // let location = useLocation();
  let dispatch = useDispatch();
  // let state = useSelector(state => state)

  useEffect(() => {
    const hash = getTokenFromUrl();
   
    window.location.hash = "";
    const userToken = hash.access_token;
    if (userToken) {
      console.log(userToken)
      dispatch(setToken(userToken))
      dispatch(getUserInfo(userToken))
      history.push('/profile')
    }
  // eslint-disable-next-line 
  }, []);

  return (
    <Router>
      <div>
        {/* <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }} 
        />*/}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
