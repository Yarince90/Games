const express = require("express");
const ejs = require("ejs");

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.static("games"));

app.get('/', (req, res)=>{
    res.render('home.ejs');
});

app.get('/simonGame', (req, res)=>{
    res.render('simonGame');
});

app.get('/drumKit', (req, res)=>{
    res.render('drumKit');
});

app.get('/diceGame', (req, res)=>{
    res.render('diceGame');
});


app.listen(port, ()=> {
    console.log("Server started on port: " + port);
  });