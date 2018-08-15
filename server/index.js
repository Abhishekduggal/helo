require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const port = process.env.SERVER_PORT || 6354;
const app = express();
const { create, get_User } = require("./controllers/userCtrl");

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

app.post("/api/user", get_User);
app.post("/api/user/create", create);

app.listen(port, () => {
  console.log(`Sim 3 I am up and listening on port: ${port}`);
});
