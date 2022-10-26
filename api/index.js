const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")

//Configuration
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, () => console.log("Connected to MongoDB.."));

//routes 
const postsRoute = require('./routes/postsRoute');
const commentRoute = require('./routes/commentRoute');

//Middleware
app.use(express.json());

//route middlewares
app.use('/api', postsRoute);
app.use('/api', commentRoute);

app.listen(3000, () => console.log("Server up and running..."));