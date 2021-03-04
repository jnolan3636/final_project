const express = require('express');
const app = express()

const routes = require('./routes.js');
// const cors = require("cors");

app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on
port: ${port}.`));
// app.use(cors());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
