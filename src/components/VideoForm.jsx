import React from 'react'
import { Modal, Button } from 'react-materialize';

class VideoForm extends React.Component {

    state = {
        clicked: false, 
        title: "",
        description: "",
        thumbnail: [],
        given_video: []
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
        this.props.handleVideoForm(formData)
      }

    thisGoesInTheInputs = (event) => {
        // console.log(event.target.files[0]);
        
        this.setState({
          [event.target.name]: event.target.value
        })
      }
   

    render(){
        return(
            <div>
            
                <Button onClick={this.whenClicked} >Upload a Video</Button>
             <Modal>
                 { this.state.clicked ?  
                   <form onSubmit={this.handleSubmit}>
                        <label> Title:
                            <input type="text" name='title' onChange={this.thisGoesInTheInputs} value={this.state.title}/>   
                        </label>
                        <label> Description:
                            <input type="text" name='description' onChange={this.thisGoesInTheInputs} value={this.state.description} />   
                        </label>
                        <label> thumbnail:
                            <input type="file" name='files'  onChange={() => console.log(this.fileInput)} ref={this.fileInput} />   
                        </label>
                        <label> Video:
                            <input type="file" name='files' onChange={() => console.log(this.videoInput)} ref={this.videoInput}  />   
                        </label>
                        <input type="submit" value="submit"/>
                    </form>
                   : 
                   null 
                   }
                  </Modal>
            </div>
        )
    }

}

export default VideoForm