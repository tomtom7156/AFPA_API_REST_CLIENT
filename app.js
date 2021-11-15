//Appel des modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');

//Connect to db
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) return console.log(err);
    else  console.log('Connected');
   
});

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false,}));
app.use(cors());
app.use(require('./app/routes'));

app.listen(PORT);