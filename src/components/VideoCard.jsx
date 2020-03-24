import React from "react"
import {Route, Switch} from 'react-router-dom'


class VideoCard extends React.Component {
    

    render(){
        let {title, description, thumbnail} = this.props.videos
        return(
            // <Route to= "/" />
            <div>

                <span> {title} </span>
                <span> {description} </span>
                <span> {thumbnail} </span>
            

            </div>
       
        )
    }
}

export default VideoCard