import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container className="ml-0">
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={this.toggle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="https://github.com/deveshlashkari"
                    target="_blank"
                    className="text-light"
                  >
                    Github
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://deveshlashkari.me"
                    target="_blank"
                    className="text-warning"
                  >
                    Website
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/devesh.lashkari.1"
                    target="_blank"
                  >
                    <span className="text-primary">Face</span>
                    <span className="text-light">book</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://twitter.com/devesh_lashkari"
                    target="_blank"
                    className="text-info"
                  >
                    Twitter
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
