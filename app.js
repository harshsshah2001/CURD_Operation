const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const indexRoutes = require('./router/index');

const app = express();


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yourdatabase').then(()=>{
    console.log("Database created successfully")
}).catch((err)=>{
    console.log("Db creation error")
})

// Configure Handlebars as the view engine
app.set('view engine', 'hbs');

app.set("views","./views")

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load routes
app.use('/', indexRoutes);

app.listen(2325, () => {
  console.log('Server is running');
});
