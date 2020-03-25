import React from 'react';
import './App.css';
import Users from './components/UserContainer'

import {Switch, Route, withRouter} from 'react-router-dom'
import VideoContainer from './components/VideoContainer';
import VideoForm from './components/VideoForm'

class App extends React.Component {

  state = {
     users: [],
     videos: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        })
      })
  }

  // pushingVidData = (input) => {
  //   this.setState({ videos: [...this.state.videos, input] })
  // }

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

  // onFileChangeHandler = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //       selectedFile: e.target.files[0]
  //   });
  //   const formData = new FormData();
  //   formData.append('file', this.state.selectedFile);
  //   fetch('http://localhost:8080/upload', {
  //       method: 'post',
  //       body: formData
  //   })


  render() {
    // get info to backend through formData
    //carrierWave to save info coming in from frontEnd
    return (
    <div >
      <h1>App</h1>
      {/* <Switch>
      <Route path="/users" >
        <Users theUser= {this.state.users} />
      </Route>

      <Route path="/homepage" > */}
          <VideoContainer theVideo={this.state.videos} 
                                  addingVideos={this.newVideo} 
                                  pushingVidData={this.pushingVidData}
                                  />
           <VideoForm newVideo={this.newVideo} 
                                handleVideoForm={this.handleVideoForm}
           />                       
      {/* </Route>
      </Switch> */}
    </div>
  );
  }
  
}

export default withRouter(App);
