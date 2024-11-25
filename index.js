// var express = require ("express");
// var app = express();

// app.listen(8383);

// app.use(express.json());

// app.get("/home", (req, res) =>{
//     res.sendFile("index.html", {root: __dirname});
// })

// app.post("/contact", (req, res) => {
//     console.log(req.body);
// })


var express = require("express"); // Imports the Express library to create a web application
var app = express(); // Creates an Express application instance
app.listen(8383); // Starts the server on port 8383 and listens for incoming requests
app.use(express.json()); // Middleware to parse incoming JSON data in the request body

// Defines a route for handling GET requests to "/home"
app.get("/home", (req, res) => {
    // Sends the "index.html" file as a response, resolving the path from the current directory
    res.sendFile("index.html", { root: __dirname });
});

// Defines a route for handling POST requests to "/contact"
app.post("/contact", (req, res) => {
    // Logs the body of the incoming POST request to the console
    console.log(req.body);
});
