import React, { Component } from 'react';

class RegisterForm extends Component {

  state = {
    username: "",
    password: "",
    profile_name: "",
    bio: "",
    age: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let { username, password, profile_name, bio, age } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
        <label htmlFor="profile name">Profile_name:</label>
        <input type="text" autoComplete="off" name="profile_name" value={profile_name} onChange={this.handleChange}/>
        <label htmlFor="bio">Bio:</label>
        <input type="text" autoComplete="off" name="bio" value={bio} onChange={this.handleChange}/>
        <label htmlFor="age">Age:</label>
        <input type="integer" autoComplete="off" name="age" value={age} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

export default RegisterForm;