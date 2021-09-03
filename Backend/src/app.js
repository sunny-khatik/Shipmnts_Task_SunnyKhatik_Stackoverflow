const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", require("./Routes/users"));
app.use("/questions", require("./Routes/questions"));

const DB_URL = "mongodb://127.0.0.1:27017/stackoverflow_backend";
const port = 8080;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log("MongoDB Error:\n", error));

app.get("/", (req, res) => {
  res.send("Server is Working...");
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
