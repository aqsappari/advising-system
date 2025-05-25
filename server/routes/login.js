const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login", {
    layout: "initial",
    title: "LOGIN - WMSU Advising System",
    style: "login",
  });
});

module.exports = router;
// This code sets up a basic Express router that handles GET requests to the root URL ("/").
// When a GET request is made to the root URL, it renders a view called "home" using the Handlebars template engine.
// The view is rendered with a layout called "initial", and it passes an object containing the title "Home Page" and a style named "login".
// The rendered view will be sent back to the client as the response.
// The router is then exported so it can be used in the main application file (app.js).
