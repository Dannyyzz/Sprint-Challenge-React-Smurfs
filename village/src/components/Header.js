import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

 class Header extends Component {
  render() {
    return (
      <div>
        <h1>Smurfs!</h1>
        <hr></hr>
        <NavLink to="/smurfs">View Smurfs </NavLink>
        <NavLink to="/form">Add Smurf</NavLink>
      </div>
    )
  }
}

 export default Header; 