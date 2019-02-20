import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Homepage from './Components/Homepage/Home.js'
import Signup from './Components/Homepage/Signup.js'
import Login from './Components/Homepage/Login.js'
import DashboardPage from './Components/DashboardPage.js'
import UsersProfile from './Components/Users/UsersProfile.js'
import Users from "./users/Users";
import AuthForm from "./login/AuthForm";
import Auth from "./utils/Auth";
import PrivateRoute from "./utils/AuthRouting";


class App extends Component {
  state = {
    isLoggedIn: false,
    user: ""
  };

  componentDidMount() {
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.get("/users/isLoggedIn").then(user => {
      if(user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if(user.data.username) {
          this.logoutUser();
        } else {
          Auth.deautheticateUser();
        }
      }
    });
  }

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deautheticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };


  render() {
    const { isLoggedIn, username } = this.state;

    let greeting = isLoggedIn ? (
      <span>
        Welcome {username} {" ~ "}
      </span>
    ) : null;
    let logoutButton = isLoggedIn ? (
      <span>
        <button onClick={this.logoutUser}>Logout</button> {" ~ "}
      </span>
    ) : null

    return (
      <div className="App">
        <nav>
          {greeting} {logoutButton}
        </nav>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route exact path='/dashboard' component={DashboardPage} />
          <Route path='/dashboard/user' component={UsersProfile} />
          <Route path='/auth' render={() => {return(<AuthForm checkAuthenticateStatus={this.checkAuthenticateStatus} isLoggedIn={isLoggedIn} /> ); }} />
          <PrivateRoute path="/users" component={Users} />
        </Switch>
      </div>
    );
  }
}

export default App;
