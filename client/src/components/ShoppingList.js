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
                 
                {/* Below we list all the items */}
                <ListGroup>
                    {/* We wrap the items around a Transition Group and traverse through each item using items.map */}
                    {/* For each item, we want to display a listGroup item and add in a fading transition effect */}
                    <TransitionGroup className="shopping-list">
                        {/* The below traverses through each item and adds in the effect*/}
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                {/* Below, we wrap each item name inside the ListGroupItem tag */}
                                <ListGroupItem>
                                    {/* Below, we add in a delete button */}
                                    {/* On click, we set an arrow function to the current state (which is items) */}
                                    {/* Now we take the items in the state (state.items) and use the filter method */}
                                    {/* We use 'item' as the variable in the filter method. If item.id is NOT EQUAL to the id of the item we clicked on, it does NOT show up in our array */}
                                    {/* We basically filtered out the item that we clicked on using the id attribute. This is just another way of saying we delted out item */}
                                    {/* The '&times;' just gives us the 'x' icon for deleting */}
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>        
                        ))}
                    </TransitionGroup>
                </ListGroup>    
            </Container>
        );
    }
}

export default ShoppingList;