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
import VideoForm from './components/UserForm'

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

  handleVideoForm = (vidObj) => {
    console.log(vidObj)
    let videoObj = {
      ...vidObj,
      id: Math.floor(Math.random() *100)
    }
  fetch('http://localhost:3000/videos', {
      method: 'POST',
      body: vidObj
      })
      .then(res => res.json())
      .then( (videoObj) => {
        let videoArray = [videoObj, ...this.state.videos]
        this.setState({
          videos: videoArray
        })
    })
  }

  newVideo = (event) => {

  const formData = new FormData();
  formData.append('file', event.target.files[0])

  fetch("http://localhost:3000/videos",  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }, body:  formData
  })
    .then( res => res.json())
    .then(newVidObj => {
      let newVideoArray = [newVidObj, ...this.state.videos]
      // this.props.addVideo(data)
      this.setState({
        videos: newVideoArray
      })
    })
  }


  render() {
    // get info to backend through formData
    //carrierWave to save info coming in from frontEnd
    // console.log(this.state)
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
      <VideoForm newVideo={this.newVideo} handleVideoForm={this.handleVideoForm} />
      <VideoContainer theVideo={this.state.videos} addingVideos={this.newVideo} pushingVidData={this.pushingVidData} />

      </Switch>
    </div>
  );
  }
  
}

export default withRouter(App);
