import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import LegalMention from './Footer/LegalMention';
import CGU from './Footer/Cgu'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/jeremy-ortuno/">Jeremy Ortuno - 2019</NavLink>
          </NavItem>
          <NavItem>
            <CGU />
          </NavItem>
          <NavItem>
            <LegalMention />
          </NavItem>
        </Nav>
      </div>
    )
  }
}
