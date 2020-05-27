import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Login from "./components/login/login";
import Userlist from "./components/login/userlist";
import Register from "./components/login/register";
import Logout from "./components/login/logout";
import Protected from "./components/login/protected";
import store from './store';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/register">
            <Register />
          </Route>
          {/*<Protected exact path="/register" component={Register} />*/}
          <Protected exact path="/userlist" component={Userlist} />
          <Route path="/login" render={(props) => (<Login {...props} />)} />
          {/*<Route path="/userlist">
          <Userlist />
</Route>*/}
          <Route path="/logout">
            <Logout />
          </Route>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
