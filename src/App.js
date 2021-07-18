import Home from "./pages/home/Home"
import Profile from './pages/profile/profile'
import Login from './pages/login/Login'
import Register from "./pages/register/Register"
import { useContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { AuthContext } from "./context/AuthContext";


function App() {

  const { user } = useContext(AuthContext);
  //console.log("USER STATE:::::",user);

  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            { user ? <Home /> :  <Register />}
          </Route>
          <Route path="/login" exact>
            { user ? <Redirect to="/" /> :<Login /> }
          </Route>
          <Route path="/register" exact>
             { user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
       
      </Router>
  );
}

export default App;
