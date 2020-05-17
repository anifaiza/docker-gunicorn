import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login/login";
import Auth from "./components/login/auth";
import Userlist from "./components/login/userlist";
import Register from "./components/login/register";
import Logout from "./components/login/logout";
import Protected from "./components/login/protected"
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        {/*<Route path="/register">
          <Register />
  </Route>*/}
        <Protected exact path="/register" component={Register} />
        <Protected exact path="/userlist" component={Userlist} />
        <Route path="/login" render={(props) => (<Login {...props}/>)}/>
        {/*<Route path="/userlist">
          <Userlist />
</Route>*/}
        <Route path="/logout">
          <Logout />
        </Route>
      </Router>
    </div>
  );
}

export default App;
