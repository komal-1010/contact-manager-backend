const express=require('express');
const connectDb = require('./config/dbConnection');
const dotenv=require('dotenv').config();//The primary role of the dotenv package is to allow you to define environment-specific variables in a .env file and then access them within your application using process.env.

connectDb()
const app=express();
const port=process.env.PORT
app.use(express.json())
app.use('/api/contacts',require('./routes/contactRoute'))
app.use('/api/users',require('./routes/userRoute'))
app.listen(()=>{
    console.log(`Server is running on port ${port}`)
})