import React from "react"
import VideoCard from "./VideoCard"
import {withRouter} from 'react-router-dom'
import VideoForm from './VideoForm'

class VideoContainer extends React.Component {

    state = {
        
    }
    
    render(){
        let arrayOfVideos = this.props.theVideo.map((oneVideo) => {
            return <VideoCard  key ={oneVideo.id} video={oneVideo} />
        })
        return(
            <div>
            <h1>List Of videos</h1>
                <VideoForm />
                {arrayOfVideos} 
            </div>
        )
    }


}

export default withRouter(VideoContainer)