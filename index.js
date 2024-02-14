const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('hello from server'));

// user routes
app.use('/users', userRoutes);

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

