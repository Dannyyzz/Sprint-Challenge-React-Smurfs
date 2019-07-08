import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

 class Header extends Component {
  render() {
    return (
      <div>
        <h1>Smurfs!</h1>
        <hr></hr>
        <NavLink onClick={this.props.resetForm} to="/">View Smurfs </NavLink>
        <NavLink onClick={this.props.resetForm} to="/smurf-form">Add Smurf</NavLink>
      </div>
    )
  }
}

 export default Header; 