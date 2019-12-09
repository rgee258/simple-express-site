const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('<h1>Home</h1><p>Welcome to the home page!</p>');
});

app.get('/about', function(req, res) {
  res.send('<h1>About</h1><p>This is my simple Node app, rewritten using Express!</p>');
});

app.get('/contact-me', function(req, res) {
  res.send("<h1>Contact Me</h1><p>If you see this you've probably seen my GitHub already, so contact me on there.</p>");
});

// 404's are not real errors and not treated as such, so we add this use at the bottom to handle them
// http://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses
app.use(function(req, res, next) {
  res.status(404).send('<h1>404 Error</h1><p>The file you requested could not be found.</p>');
});

app.listen(8080);