import React from 'react'

class UserCard extends React.Component {


    render(){
        console.log(this.props.user);
        let {profile_name, bio, age } = this.props.user
        return(
            <div>
                <h3>{profile_name}</h3>
                <p> {bio} </p>
                <span>{age} </span>
            </div>
        )
    }
}

export  default UserCard