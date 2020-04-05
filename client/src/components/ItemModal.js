import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { connect } from "react-redux";

import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, name: "" };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleItemName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addItemInList = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    //Add item via  addItem action
    this.props.addItem(newItem);

    //Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to shopping list</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.addItemInList}>
              <FormGroup>
                <Label for="item">Item Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add shopping item"
                  onChange={this.handleItemName}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
