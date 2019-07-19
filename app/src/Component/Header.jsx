import React, { Component } from 'react'
import './Header.scss'
import Navbar from './Header/Navbar.jsx'

export default class Header extends Component {
  render() {
    return (
      <div class="header">
        <h1>WILD CIRCUS</h1>
        <Navbar />
      </div>
    )
  }
}
