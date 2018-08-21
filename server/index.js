require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const port = process.env.SERVER_PORT || 6354;
const app = express();
const { create, get_User } = require("./controllers/userCtrl");
const {
  read_Posts_User,
  read_Posts,
  create_Posts,
  update
} = require("./controllers/postCtrl");

// APP Build Folder serve all files
// console.log(__dirname + "/../build");
// app.use(express.static(__dirname + "/../build"));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

app.post("/api/user", get_User);
app.post("/api/user/create", create);
app.get("/api/posts", read_Posts);
app.post("/api/posts/:id", read_Posts_User);
app.post("/api/create/:id", create_Posts);
app.put("/api/post/:title", update);

// Build the APP for production catch all errors during build
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => {
  console.log(`Sim 3 I am up and listening on port: ${port}`);
});
