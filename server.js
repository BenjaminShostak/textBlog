const express = require("express");
const app = express();
const expHBars = require("express-handlebars");
const path = require("path");


app.engine('handlebars', expHBars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout')}));

app.set('view engine', 'handlebars');



//Routing
//home route log-in
app.get('/', ( req , res) => {
    res.render('index', {title: 'homepage',
    name: 'Benjamin Shostak',
    age: '33'
    });
});
//get request to sign in page
app.get('/signIn', ( req, res) => {
    res.render('signIn', {title: 'signInPage', 
    description: 'adding description for giggles',
    isAmazing: true ,           //possibly use to automatically display old blog posts 
    });
});
app.listen(8080, err =>  {
    if (err) {
        return console.log('ERROR', err);
     } console.log('Server is starting at port ', 8080);
});