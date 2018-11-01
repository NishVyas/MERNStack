import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    // Below we create some data that we hard code in
    state = {
        items:[
            { id: uuid(), name: 'Eggs'},
            { id: uuid(), name: 'Milk'},
            { id: uuid(), name: 'Steak'},
            { id: uuid(), name: 'Water'},
        ]
    }

    render() {
        const { items } = this.state;
        return(
            // We shall fit everything in a container
            <Container>
                {/* Lets add dark button, with inline css */}
                {/* We will create an inline event handler, so on click we prompt the user to enter the item and that will go into the name variable */}
                {/* Then we check to see if its filled */}
                {/* If so, then the below just adds the item to the state above with a generated id and the name that the user typed in */ }
                <Button 
                 color="dark"
                 style={{ marginBottom: '2rem' }}
                 onClick={() => {
                     const name = prompt('Enter Item');
                     if(name) {
                         this.setState(state => ({
                             items: [...state.items, { id: uuid, name}]
                         }));
                     }
                 }}
                 >
                    Add Item
                 </Button>    
            </Container>
        );
    }
}

export default ShoppingList;