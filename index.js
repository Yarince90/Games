const express = require("express");
const ejs = require("ejs");

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.static("images"));

app.get('/',(req, res)=>{
    res.render('home.ejs');
})














app.listen(port, ()=> {
    console.log("Server started on port: " + port);
  });