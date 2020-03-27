import React from "react"

class VideoCard extends React.Component {
    

    render(){
        let {title, description, thumbnail, given_video} = this.props.video
        console.log(this.props);
        
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