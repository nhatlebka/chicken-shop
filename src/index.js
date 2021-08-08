const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

//Template engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));




route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})