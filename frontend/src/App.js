import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './Components/Homepage/Home.js'
import DashboardPage from './Components/DashboardPage.js'
import UsersProfile from './Components/Users/UsersProfile.js'
// import Users from "./Components/AuthenticationFiles/users/Users";
import AuthForm from "./Components/AuthenticationFiles/AuthForm";
import PrivateRoute from "./Components/AuthenticationFiles/utils/AuthRouting";
// import Authenticate from './Authentication.js'
import Auth from "./Components/AuthenticationFiles/utils/Auth";
import axios from 'axios'


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
        this.props.checkAuthenticateStatus();
      });
  };

  render() {
    return (
      <div className="App">


      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/dashboard' component={DashboardPage} />
      <Route path='/auth' render={() => {return(<AuthForm checkAuthenticateStatus={this.checkAuthenticateStatus} isLoggedIn={this.props.isLoggedIn} /> ); }} />
      <PrivateRoute path="/dashboard/user" component={UsersProfile} />
      </Switch>
      </div>
    );
  }
}

export default App;
