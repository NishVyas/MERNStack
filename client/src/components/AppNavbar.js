// The below imports all the react components that we will need
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

// The below is a class called navbar which extends from a reactstrap component
class AppNavbar extends Component {
    // The below refers to the "hamburger menu" and is currently set to be NOT open
    state = {
        isOpen: false
    }

    // The below uses an arrow function and helps since we dont have to bind this custom toggle function inside our AppNavbar class
    // The toggle just toggles the "hamburger menu" to the opposite (if its open it will close and vice-versa)
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // Below we render our navbar using the components we imported above
    render() {
        return(
            <div>
            {/* We will have a dark navbar color, dark attribute so our text should be light, expand sm which creates the hamburger menu for small screens, and a classname of mb-5 which moves everything down under the navbar */}
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    {/* The navbar brand "ShoppingList" will go to homepage if pressed */}
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    {/* The navbar toggler will use the toggle function from above when the toggler is clicked */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {/* The below aligns our links to the right */}
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/NishVyas">
                                    Github
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