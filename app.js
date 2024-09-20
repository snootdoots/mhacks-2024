const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store user submissions (acting as a "database")
const userData = [];

// Handle POST request from the form
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    // Store the user data
    userData.push({ name, email });
    console.log(userData);

    // Send a response to the user
    res.send(`Thanks, ${name}! Your email ${email} has been submitted.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
