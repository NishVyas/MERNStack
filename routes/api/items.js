const express = require('express');
const router = express.Router();

// Item Model
// ../../ is used to go out of the api and routes folder
const Item = require('../../models/Item');

// @route GET request to api/items
// @desc Get all items
// @access Public
// We use router.get instead of app.get since we are not in the server.js file
// We also dont put api/items in the router.get function because we are already in it
router.get('/', (req, res) => {
    // We use the find method from mongo on our item schema
    Item.find()
        // We sort our results by date in descending order (hence -1)
        .sort({ date: -1 })
        // We fetch from the database, it gives us items
        .then(items => res.json(items))
});

// @route POST request to api/items
// @desc Create an item
// @access Public
router.post('/', (req, res) => {
    // We create a variable for our new item
    const newItem = new Item({
        // All we need is a name which we request from the body
        // The date field is added in automatically
        name: req.body.name
    });
    // We save our new item 
    newItem.save().then(item => res.json(item));
});

// @route DELETE request to api/items/:id
// @desc Delete an item
// @access Public
router
    .delete('/:id', (req, res) => {
        // We first find the id of the item we are trying to delete
        Item.findById(req.params.id)
            // It gives us an item, we set an arrow function for removing, and we respond with returning an object that says 'true'
            .then(item => item.remove().then(() => res.json({success: true}))
            )
            // The below catches an error if an id doesnt exist
            // Once the error is caught, we respond with a 404 error (not found error) and then what we want to send
            .catch(err => res.status(404).json({success: false}));
});

module.exports = router;