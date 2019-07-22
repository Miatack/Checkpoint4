import React, { Component } from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import '../Assets/Style.scss'

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
            <NavLink href="/Shop/">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/About/">About</NavLink>
            </NavItem>
        </Nav>
      </div>
    )
  }
}
