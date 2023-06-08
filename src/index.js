const express = require('express');
const cors = require('cors');
const route = require('./router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(3001, () => console.log('🔥 Server is runnig at http://localhost:3001'));
