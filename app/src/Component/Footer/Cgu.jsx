import React ,{ Component }from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink } from 'reactstrap';

export default class CGU extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <NavLink color="primary" onClick={this.toggle}>CGU</NavLink>
        <Modal id="footer-links-call-modal-global" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Terms Of Service</ModalHeader>
          <ModalBody>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quo porro unde, consequatur odit sequi reiciendis ipsa, nemo, quidem nulla ducimus perspiciatis. Id ex, hic cupiditate iure aperiam voluptas nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste adipisci illum fuga necessitatibus explicabo voluptatum ducimus nobis iure dolorum reiciendis autem quo est nemo voluptatibus, aperiam, asperiores quaerat fugit debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quas nostrum corrupti, reprehenderit et magni non iure sapiente quisquam sit praesentium sed. Quae nisi modi facere ex dolorem totam asperiores!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Fermer</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
