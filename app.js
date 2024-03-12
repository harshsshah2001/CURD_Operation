// const express = require('express');
// const mongoose = require('mongoose');
// const exphbs = require('express-handlebars');
// const bodyParser = require('body-parser');
// const indexRoutes = require('./router/index');

// const app = express();


// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/yourdatabase').then(()=>{
//     console.log("Database created successfully")
// }).catch((err)=>{
//     console.log("Db creation error")
// })

// // Configure Handlebars as the view engine
// app.set('view engine', 'hbs');
// app.set("views","./views")

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Load routes
// app.use('/', indexRoutes);

// app.listen(5252, () => {
//   console.log('Server is running');
// });



const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const indexRoutes = require('./router/index');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yourdatabase')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Configure Handlebars as the view engine
// app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load routes
app.use('/', indexRoutes);

const PORT = process.env.PORT || 5252;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
