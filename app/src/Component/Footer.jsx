import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink dark href="https://www.linkedin.com/in/jeremy-ortuno/">Jeremy Ortuno - 2019</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">CGU</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Legal</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}
