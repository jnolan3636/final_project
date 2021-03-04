const express = require('express');
const app = express()

const routes = require('./routes.js');
// const cors = require("cors");

app.use(express.json());
const port = 3000;
// app.use(cors());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
