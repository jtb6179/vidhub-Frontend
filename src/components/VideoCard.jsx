import React from "react"
import {Route, Switch} from 'react-router-dom'


class VideoCard extends React.Component {
    

    render(){
        let {title, description, thumbnail, given_video} = this.props.video
        return(
            // <Route to= "/" />
            <div>
                <span> {title} </span>
                <span> {description} </span>
                <span> {thumbnail} </span>
                <span> {given_video} </span>
            </div>
       
        )
    }
}

export default VideoCard