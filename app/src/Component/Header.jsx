import React, { Component } from 'react'
import Navbar from './Header/Navbar.jsx'
import './Assets/Style.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>WILD CIRCUS</h1>
        <Navbar />
      </div>
    )
  }
}
