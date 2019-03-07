import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Homepage from './Components/Homepage/Home.js'
// import DashboardPage from './Components/DashboardPage.js'
import UsersDashboard from './Components/Users/UsersDashboard.js'
import AuthForm from "./Components/AuthenticationFiles/AuthForm";
import PrivateRoute from "./Components/AuthenticationFiles/utils/AuthRouting";
import UsersProfile from './Components/Users/UsersProfile'
import Auth from "./Components/AuthenticationFiles/utils/Auth";
import PostsForm from './Components/Users/PostsForm'
import ImageForm from './Components/Users/ImageForm'
import LinksForm from './Components/Users/LinksForm'
import QuotesForms from './Components/Users/QuotesForms'
import axios from 'axios'
import "./CSSS/Home.css"



class App extends Component {
  state = {
    isLoggedIn: false,
    user: "",
  };

  componentDidMount() {
    this.checkAuthenticateStatus();
  }

  checkAuthenticateStatus = () => {
    axios.post("/users/isLoggedIn").then(response => {
      if(response.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if(response.data.username) {
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

      this.props.history.push("/")
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
      <Route path='/new/text' component={PostsForm} />
      <Route path='/new/photo' component={ImageForm} />
      <Route path='/new/link' component={LinksForm} />
      <Route path='/new/quote' component={QuotesForms} />
      <PrivateRoute path="/dashboard/user" component={UsersDashboard} logoutUser={this.logoutUser}/>
      <PrivateRoute path="/profile/:username"component={UsersProfile} isLoggedIn={this.state.isLoggedIn}/>
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
