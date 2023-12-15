const express = require('express');
const _ = require('lodash');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const app = express();

// Your code utilizing the dependencies can go here

// Example usage of lodash
const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log('Sum of numbers:', sum);

// Example usage of axios
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Axios Response:', response.data);
  })
  .catch(error => {
    console.error('Axios Error:', error);
  });

// Example usage of jsonwebtoken (This is a simple example, in practice, you'd handle tokens securely)
const user = { id: 1, username: 'example_user' };
const token = jwt.sign(user, 'secret_key');
console.log('Generated Token:', token);

// Your Express app logic can be implemented here using the express dependency

app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

