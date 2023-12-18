import express from "express"
import path from "path";
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Hello World Theo!');
});

// Listen
var port = process.env.PORT || 3000;
console.log("Starting hello-world server");
app.listen(port, () => console.log('Listening on localhost:'+ port));
