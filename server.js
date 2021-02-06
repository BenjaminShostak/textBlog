const { text } = require("express");
const express = require("express");
const express = require("express");
const app = express();
const expHBars = require("express-handlebars");


app.engine('handlebars', expHBars());
app.set('view engine', 'handlebars');

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});