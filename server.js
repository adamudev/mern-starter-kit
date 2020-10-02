const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

const uri = process.env.ATLAS_URI || "mongodb://localhost:27017/myapp";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established successfully");
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
