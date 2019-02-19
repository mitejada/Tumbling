import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './Components/Homepage/Home.js'
import Signup from './Components/Homepage/Signup.js'
import Login from './Components/Homepage/Login.js'
import DashboardPage from './Components/DashboardPage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={DashboardPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
