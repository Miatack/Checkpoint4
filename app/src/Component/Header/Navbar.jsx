import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/">Performance</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Program/">Program</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Map</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">About</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}
