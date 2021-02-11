const express = require("express");
const app = express();
const expHBars = require("express-handlebars");


app.engine('handlebars', expHBars());
app.set('view engine', 'handlebars');

//Routing
app.get('/', ( req , res) => {
    res.render('index');
});

app.get('/signIn', ( req, res) => {
    res.render('signIn');
});
app.listen(8080, err =>  {
    if (err) {
        return console.log('ERROR', err);
     } console.log('Server is starting at port ', 8080);
});