const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

connectDB();
app.use(express.json());

app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));

app.get('*', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
