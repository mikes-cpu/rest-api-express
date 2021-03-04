// import express
const express = require("express");

const app = express();

//import and initialise body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// initialise cors
const cors = require("cors");
app.use(cors());

// import and config the dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

// import the function that connects the db
const connectDB = require("./config/db");
connectDB();

// import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));
