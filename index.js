


const express = require('express'); // Import Express
const app = express(); // Create an instance of Express
const generate_secret_key = require("./generate_secret_key");
const verifyOTP = require("./verify");


const PORT = 3000; // Define the port

// Middleware to parse JSON
app.use(express.json());


// const secretKey = generate_secret_key();
// console.log(secretKey);


const userOTP = "833332"; // Replace with the OTP entered by the user

const verificationResult = verifyOTP(userOTP);

if (verificationResult) {
  console.log("OTP verification successful!");
} else {
  console.log("OTP verification failed!");
}

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my Node.js app!');
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
