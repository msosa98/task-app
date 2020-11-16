const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Mongo DB
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected"))
  .catch(console.log);


// Middlwares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require("./routes"));

// Server
app.listen(process.env.PORT, () => console.log("Server running"));
