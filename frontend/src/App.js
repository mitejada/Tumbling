import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Homepage from './Components/Homepage/Home.js'
// import DashboardPage from './Components/DashboardPage.js'
import UsersProfile from './Components/Users/UsersProfile.js'
// import Users from "./Components/AuthenticationFiles/users/Users";
import AuthForm from "./Components/AuthenticationFiles/AuthForm";
import PrivateRoute from "./Components/AuthenticationFiles/utils/AuthRouting";
// import Authenticate from './Authentication.js'
import Auth from "./Components/AuthenticationFiles/utils/Auth";
import axios from 'axios'
import "./CSSS/Home.css"



class App extends Component {
  state = {
    isLoggedIn: false,
    user: "",
    displayText: ""
  };

  componentDidMount() {
    this.checkAuthenticateStatus(); 
  }

  handleChange = (event) => {
    this.setState({
      displayText: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios.post("users/new/text")
      .then(posts => {
        this.setState({
          displayText: this.state.displayText
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  checkAuthenticateStatus = () => {
    axios.post("/users/isLoggedIn").then(user => {
      if(user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if(user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
  }

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

  render() {
    return (
      <div className="App">


      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/auth' render={() => {
        if(this.state.isLoggedIn) {
          return <Redirect to='/dashboard/user' />
        }
        return(<AuthForm checkAuthenticateStatus={this.checkAuthenticateStatus} isLoggedIn={this.state.isLoggedIn} /> ); }} />
      <PrivateRoute path="/dashboard/user" component={UsersProfile} />
      </Switch>
      </div>
    );
  }
}

export default App;
