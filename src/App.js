import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import VideoContainer from './components/VideoContainer';
import VideoForm from './components/VideoForm'
import Form from './components/UserForm'
import Home from './components/Home'
import RegisterForm from './components/UserRegisterForm'
import ProfileContainer from './components/ProfileContainer'
import UserVideoForm from './components/UserForm'
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {

  state = {
     user: {
      username: "",
      profile_name:"",
      bio: "",
      age: 0,
      id: 0,
     videos: [],
    
  },
   token: "",
  allVideos: []
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
    return <ProfileContainer handleVideoForm={this.handleVideoForm} user={this.state.user} token={this.state.token} />
  }

  handleVideoForm = (vidObj) => {
    console.log(vidObj)

    let videoObj = {
      ...vidObj,
    id: Math.floor(Math.random() *1000)
  }
  fetch('http://localhost:3000/videos', {
    method: 'POST',
     body: videoObj
  })
    .then(res => res.json())
    .then( (data) => {
      let user = this.state.users 
      let {videos}= user
      let videoArray = [data, ...videos]
        this.setState({
          videos: videoArray
          })
    })
  }

  render() {
    console.log(this.state);
    
    return (
    <div >
      <NavBar/>
     
      <Switch>

      <Route path="/login" render={ this.renderLoginForm } />
      <Route path="/register" render={ this.renderRegisterForm } />
      <Route path="/profile" render={ this.renderProfile } />
      <Route path="/" exact component={ Home } />
      <Route render={ () => <p>Page not Found</p> } />
      <UserVideoForm  handleVideoForm={this.handleVideoForm} />

      </Switch>
          <VideoContainer theVideos={this.state.user.videos} 
                                  
                                  handleVideoForm={this.handleVideoForm}
                                  />
           <VideoForm  
                                handleVideoForm={this.handleVideoForm}
           />                       
      {/* </Route>
      </Switch> */}
    </div>
  );
  }
  
}

export default withRouter(App);
