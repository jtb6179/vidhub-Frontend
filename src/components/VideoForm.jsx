import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';

class VideoForm extends React.Component {

    state = {
        clicked: false, 
        title: "",
        description: "",
        thumbnail: "",
        given_video: ""
    }

    fileInput = React.createRef()
    
    videoInput = React.createRef()

    whenClicked = (event) => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    

    handleSubmit = (event)=>{
        event.preventDefault()
        console.log(event.target)
        const formData = new FormData();
        formData.append('thumbnail', this.fileInput.current.files[0] )
        formData.append('given_video', this.videoInput.current.files[0])
        this.handleVideoForm(formData)
      }

    thisGoesInTheInputs = (event) => {
        // console.log(event.target.files[0]);
        
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleVideoForm = (vidObj) => {
        // console.log(vidObj)
    
        // let videoObj = {
        //   ...vidObj,
        // id: Math.floor(Math.random() *1000)
    //   }
      fetch('http://localhost:3000/videos', {
        method: 'POST',headers: {
            'content-type': 'application/json',
            'Authorization': `bearer ${this.props.token}`
        },
         body: JSON.stringify(this.state)
      })
        // .then(res => res.json())
        // .then( (data) => {
        //  let userVideos = {...this.state.user}
        //  let videoArray = [data, ...this.state.users.videos]
        //  userVideos.videos = videoArray
        //     this.setState({
        //       userVideos
        //       })
        // })
      }
   

    render(){
        return(
            <div>
            
                <button className="waves-effect waves-light btn" onClick={this.whenClicked} >Upload a Video</button>
             
                 { this.state.clicked ?  
                   <form onSubmit={this.handleSubmit}>
                        <label> Title:
                            <input type="text" name='title' onChange={this.thisGoesInTheInputs} value={this.state.title}/>   
                        </label>
                        <label> Description:
                            <input type="text" name='description' onChange={this.thisGoesInTheInputs} value={this.state.description} />   
                        </label>
                        <label> thumbnail:
                            <input type="file"  name='files'  onChange={() => console.log(this.fileInput)} ref={this.fileInput} />   
                        </label>
                        <label> Video:
                            <input type="file" name='files' onChange={() => console.log(this.videoInput)} ref={this.videoInput}  />   
                        </label>
                        <input class="btn waves-effect waves-light" type="submit" value="submit"/>
                    </form>
                   : 
                   null 
                   }
                  
            </div>
        )
    }

}

export default VideoForm