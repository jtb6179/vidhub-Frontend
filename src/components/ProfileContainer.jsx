import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import VideoForm from './VideoForm'


class ProfileContainer extends Component {

  componentDidMount() {
    if(!this.props.token){
      this.props.history.push("/login")
    }
  }

  render() {
      let {bio, profile_name, age, username} = this.props.user
      // console.log(username);
      console.log(this.props.videos)
    return (
      <div>
        <h5>{username}&apos;s Profile</h5>
        <h6>Profile Name: {profile_name}</h6>
        <p>Bio: {bio}</p>
        <p>Age: {age}</p>
        <h6>Videos</h6>

        <ol>
          {/* {snacks.map(snackObj => <Snack key={snackObj.id} snack={snackObj} />)} */}

        </ol>
        {/* <NewSnackForm token={this.props.token} addOneSnack={this.props.addOneSnack}/> */}
        <VideoForm  
                                handleVideoForm={this.handleVideoForm}
                                token={this.props.token}
           />  
      </div>
    );
  }
}
export default withRouter(ProfileContainer);