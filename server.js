const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();


// Parse apllication body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller");
app.use(routes);

//Starting server to listen for client reuests
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost: " + PORT);
});