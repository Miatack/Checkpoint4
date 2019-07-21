import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import './Shop.scss'
export default class Shop extends Component {
  render() {
    return (
      <div class="shop">
        <h3>Shop</h3>
        <InputGroup>
          <InputGroupAddon addonType="prepend">Adult</InputGroupAddon>
          <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
          <InputGroupAddon addonType="append">15$</InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">Child</InputGroupAddon>
          <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
          <InputGroupAddon addonType="append">10$</InputGroupAddon>
        </InputGroup>
        <Button color="primary">Let's Pay!</Button>
      </div>
    )
  }
}
