import express from "express"
import path from "path";
var app = express();

// Routes
app.get('/', function(req, res) {
  // res.send('Hello World!');
    // Assuming your PNG image is in the same directory as your Node.js script
    const imagePath = path.join(__dirname, 'app', 'Theo.png');

    // Set the content type to image/png
    res.contentType('image/png');

    // Send the file as the response
    res.sendFile(imagePath);
});

app.get('/theo', function(req, res) {
  // Assuming your PNG image is in the same directory as your Node.js script
  const imagePath = path.join(__dirname, 'app', 'Theo.png');

  // Set the content type to image/png
  res.contentType('image/png');

  // Send the file as the response
  res.sendFile(imagePath);

});

// Listen
var port = process.env.PORT || 3000;
console.log("Starting hello-world server");
app.listen(port, () => console.log('Listening on localhost:'+ port));
