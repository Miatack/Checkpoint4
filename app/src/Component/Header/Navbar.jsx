import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Badge} from 'reactstrap';
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
            <NavLink href="/Program/">Program<Badge color="success">Style</Badge></NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="/Maps/">Map</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Shop/">Shop<Badge color="success">Style</Badge></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/About/">About<Badge color="success">Style</Badge></NavLink>
            </NavItem>
        </Nav>
      </div>
    )
  }
}
