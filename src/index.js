const express = require('express');
require('express-async-errors');
const cors = require('cors');
const route = require('./router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(route);
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(3001, () => console.log('🔥 Server is runnig at http://localhost:3001'));
