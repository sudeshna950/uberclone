const http = require('http'); // Import the HTTP module
const app = require('./app'); // Import your application

const PORT = process.env.PORT || 3000; // Set the port

// Create the server
const server = http.createServer(app);

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


