import React from "react"
import UserCard from './UserCard'

class UserContainer extends React.Component {

  

    render(){
        let newArray = this.props.theUser.map((oneUser) => {
            return <UserCard key={oneUser.id} user={oneUser} />
        })
        
        return (

            <div>
                {newArray}
            </div>
        )
    }

}

export default UserContainer