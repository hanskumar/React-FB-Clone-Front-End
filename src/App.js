import Home from "./pages/home/Home"
import Profile from './pages/profile/profile'
import Login from './pages/login/Login'
import Register from "./pages/register/Register"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
       
      </Router>
  );
}

export default App;
