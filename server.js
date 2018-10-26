// We are bringingin all the packages below
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// The below will tell our system to look in the items.js file so it will work
const items = require('./routes/api/items');

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());

// DB Config
// We want to bring the keys.js file in and store it in a variable
const db = require('./config/keys').mongoURI;

// Connect to Mongo (Connect to db, print out that you are connected, print out errors if any)
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes (So anything that wants to go to api/items/* should refer to the 'items' variable)
app.use('/api/items', items);

// The below just creates a port for the server side to connect to
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));