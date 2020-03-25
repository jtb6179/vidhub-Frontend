import React from 'react';
import './App.css';
import Users from './components/UserContainer'

import {Switch, Route, withRouter} from 'react-router-dom'
import VideoContainer from './components/VideoContainer';
import NavBar from './components/NavBar'
import Form from './components/UserForm'
import Home from './components/Home'
import RegisterForm from './components/UserRegisterForm'
import ProfileContainer from './components/ProfileContainer'

class App extends React.Component {

  state = {
     user: {
       username: "",
       profile_name:"",
       bio: "",
       age: 0,
       id: 0,
       videos: [{
         comments: []
       }]
     },
     token: "",
     allVideos: []
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
        .then(r => r.json())
        .then(this.handleResp)
    }
  }

  handleResp = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/profile")
      })
    }
    else {
      alert(resp.error)
    }
  }

  handleLoginSubmit = (userInfo) => {
    console.log('login')
    return fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then( resp => resp.json())
    .then( this.handleResp )
  }


  handleRegisterSubmit = (userInfo) => {
    console.log('Register')
    return fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then( resp => resp.json())
    .then( this.handleResp)
  }

  renderRegisterForm = (routerProps) => {
    if (routerProps.location.pathname === "/register") {
      return <RegisterForm formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderLoginForm = (routerProps) => {
    if(routerProps.location.pathname === "/login") {
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit} />
    }
  }

  renderProfile = (routerProps) => {
    return <ProfileContainer user={this.state.user} token={this.state.token} />
  }

  render() {
    // get info to backend through formData
    //carrierWave to save info coming in from frontEnd
    console.log(this.state)
    return (
    <div >
    <NavBar />
      <Switch>
      {/* <Route path="/users" >
        <Users theUser= {this.state.users} />
      </Route> */}

      <Route path="/login" render={ this.renderLoginForm } />
      <Route path="/register" render={ this.renderRegisterForm } />
      <Route path="/profile" render={ this.renderProfile } />
      <Route path="/" exact component={ Home } />
      <Route render={ () => <p>Page not Found</p> } />

      </Switch>
    </div>
  );
  }
  
}

export default withRouter(App);
