import React from 'react'

class VideoForm extends React.Component {

    state = {
        clicked: false,
        selectedFile: []
    }

    handleClick = (event) => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    theFileFunction = (event) => {
        event.preventDefault();
        this.setState({
            selectedFile: event.target.files[0]
        });
        const formData = new FormData();
        for(let i = 0; i < event.target.files.length; i++) {
            formData.append('file', event.target.files[i])
        }
            fetch("http://localhost:3000/videos",  {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }, body:  JSON.stringify(formData)
            })
                .then( res => res.json())
                .then(data => {
                    this.props.video.push(data)
                })
    }

    render(){
        return(
            <div>
            <button >Upload a Video</button>
                 { this.state.clicked ?  
                   <form>
                        <label> Title:
                            <input type="text" name='name'/>   
                        </label>
                        <label> Description:
                            <input type="text" name='name'/>   
                        </label>
                        <label> thumbnail:
                            <input type="file" name='files' onChange={this.theFileFunction}/>   
                        </label>
                        <label> Video:
                            <input type="file" name='files' onChange={this.theFileFunction}/>   
                        </label>
                        <input type="submit"/>.

                    </form>
                   : 
                   null 
                   }
                 
            </div>
        )
    }

}

export default VideoForm