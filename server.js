const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

const postRoutes = require('./routes/posts');

app.use(bodyParser.json());

//route middleware
app.use(postRoutes);

const PORT = 8000;

const DB_URL = 'mongodb+srv://twg:twg123@mernapp.5ysyf.mongodb.net/mernApp?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log("DB Connected");
}).catch((err) =>{
    console.log('DB connection error',err);
})

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
})