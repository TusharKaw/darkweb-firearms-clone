const express = require('express');
const app = express();
const port = 3000;

// Serve the main page
app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Sign Up Page</title>
    <link rel="stylesheet" href="style2.css">
  </head>
  <body>
    <header>
      <h1>Welcome to Guns Vista</h1>
    </header>
    <h2>Sign Up</h2>
    <form>
      <label for="username">Username:</label>
      <input type="text" id="name" name="name" required><br><br>
      
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" required><br><br>
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br><br>
      
      <input type="submit" value="Submit">
    </form>
  </body>
</html>

  `);
});

// Serve the registration page
app.get('/signup', (req, res) => {
  const signupUrl = 'https://example.com/signup'; // Replace with your actual signup URL
  res.redirect(signupUrl);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
