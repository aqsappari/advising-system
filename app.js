const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const loginRouter = require("./server/routes/login.js");

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static files middleware
app.use(express.static("public"));

// Set up Handlebars view engine
app.engine("hbs", exphbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "./views");

// Route Middleware
app.use("/", loginRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
