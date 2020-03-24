import React from 'react';
import './App.css';
import Users from './components/UserContainer'

import {Switch, Route, withRouter} from 'react-router-dom'
import VideoContainer from './components/VideoContainer';

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


  render() {
    // get info to backend through formData
    //carrierWave to save info coming in from frontEnd
    return (
    <div >
      <h1>App</h1>
      <Switch>
      <Route path="/users" >
        <Users theUser= {this.state.users} />
      </Route>

      <Route path="/homepage" >
          <VideoContainer theVideo={this.state.videos} />
      </Route>
      </Switch>
    </div>
  );
  }
  
}

export default withRouter(App);
