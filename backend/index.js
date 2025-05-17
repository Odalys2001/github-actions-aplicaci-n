const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
  host: 'db',
  user: 'postgres',
  password: 'postgres',
  database: 'testdb'
});

client.connect()
  .then(() => console.log("Connected to DB"))
  .catch(e => console.error("DB connection error", e));

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
