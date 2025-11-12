// Setup express and ejs
var express = require('express')
var ejs = require('ejs')

// Create the express application object
const app = express();
app.use(express.urlencoded({ extended: true })); // registration form body parser
app.use(express.static("public")); // allow Express to serve CSS & images from "public" folder

const port = process.env.PORT || 8000;

// using EJS as the templating engine
app.set('view engine', 'ejs');

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Start the web app listening
app.listen(port, '127.0.0.1', () => console.log(`App running on port ${port}!`));
