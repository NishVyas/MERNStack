const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for our items
// This will include a name attribute of type string that is requires
// Also includes a date attribute of type date with the default date bing the current date
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// The below allows to export this model
// Using the variable Item
// We then create a model in mongoose which takes in a model name (item) and a schema
module.exports = Item = mongoose.model('item', ItemSchema);