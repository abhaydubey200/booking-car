const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/submit', (req, res) => {
    const bookingData = req.body;
    console.log('Booking Data:', bookingData);
    // Here you can handle the form data, e.g., save it to a database
    res.send('Booking submitted successfully!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
