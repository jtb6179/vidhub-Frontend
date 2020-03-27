import React from "react"
import VideoCard from "./VideoCard"
import {withRouter} from 'react-router-dom'


class VideoContainer extends React.Component {
    
    render(){

        
        let arrayOfVideos = this.props.theVideos.map((oneVideo) => {
          console.log(this);
            return <VideoCard  key ={oneVideo.id} video={oneVideo} handleVideoForm={this.props.handleVideoForm} />
        })
        return(
            <div>
            <h1>List Of videos</h1>  
                {arrayOfVideos} 
            </div>
        )
    }


}

export default withRouter(VideoContainer)