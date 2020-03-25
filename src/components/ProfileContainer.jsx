import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import NewSnackForm from './NewSnackForm'

class ProfileContainer extends Component {

  componentDidMount() {
    if(!this.props.token){
      this.props.history.push("/login")
    }
  }

  render() {
    let {user:{bio, profile_name, age, username}} = this.props

    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3>Profile Name: {profile_name}</h3>
        <p>Bio: {bio}</p>
        <p>Age: {age}</p>
        <h3>Videos</h3>

        <ol>
          {/* {snacks.map(snackObj => <Snack key={snackObj.id} snack={snackObj} />)} */}
        </ol>
        {/* <NewSnackForm token={this.props.token} addOneSnack={this.props.addOneSnack}/> */}

      </div>
    );
  }
}
export default withRouter(ProfileContainer);