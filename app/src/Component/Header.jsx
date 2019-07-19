import React, { Component } from 'react'
import './Header.scss'
import Navbar from './Header/Navbar.jsx'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>WILD CIRCUS</h1>
        <Navbar />
      </div>
    )
  }
}
