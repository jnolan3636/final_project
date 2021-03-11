const express = require("express");
const app = express();
app.use("/",express.static(__dirname + "/public"));
const routes = require("./routes.js");
app.use(express.json());
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());

// Add express static here in order to

app.use(express.json());
app.use("/api/", routes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
