const express = require("express");
const app = express();
const expHBars = require("express-handlebars");


app.engine('handlebars', expHBars({
    defaultLayout: 'main',
layoutsDir: path.join(
__dirname, 'views/mainLayout')}));

app.set('view engine', 'handlebars');



//Routing
app.get('/', ( req , res) => {
    res.render('index', {title: 'homepage'});
});

app.get('/signIn', ( req, res) => {
    res.render('signIn', {title: 'signInPage'});
});
app.listen(8080, err =>  {
    if (err) {
        return console.log('ERROR', err);
     } console.log('Server is starting at port ', 8080);
});