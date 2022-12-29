
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5800;

//SETUP MIDDLEWARE----------------------------------------------------------------------------
app.use(cors());
app.use(express.json());
//--------------------------------------------------------------------------------------------




//DATABASE CONNECTION-------------------------------------------------------------------------
const uri = "mongodb+srv://Developer007:DEVELOPER2000@cluster0.rslpdy9.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', false)
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connection.once("open", ()=>{
    console.log('Connected to MongoDB database');
});
//--------------------------------------------------------------------------------------------





//ROUTES--------------------------------------------------------------------------------------
const userRouter = require('./routes/userRouter');
app.use('/api/users/', userRouter);

const uiDataRouter = require('./routes/uiDataRouter');
app.use('/api/ui-data/', uiDataRouter);

const emailRouter = require('./routes/emailRouter');
app.use('/api/email/', emailRouter);


//START SERVER--------------------------------------------------------------------------------
app.listen(port, ()=>{
    console.log(`Connection to server established at port ${port}`)
});
//--------------------------------------------------------------------------------------------