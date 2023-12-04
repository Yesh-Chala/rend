const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a simple text response
  res.end('Hello, World! This is a basic Node.js server.');

  // Log the request method and URL for demonstration purposes
  console.log(`${req.method} request received for ${req.url}`);
});

// Specify the port the server should listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
