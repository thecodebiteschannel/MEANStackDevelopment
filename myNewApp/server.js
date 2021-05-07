// Import the Express module and instanciate the app object
const express = require('express');
const app = express();
// Specify the port that the web server will listen to
const port = 3000;
// Set your default route, requests to / will be shown the message below
app.get('/', (req, res) => res.send('Welcome to The Code Bites Channel!'));
// Configure your app to listen to the port above
app.listen(port, () => console.log('App started on port 3000'));