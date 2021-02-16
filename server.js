const path=require('path');
const express=require('express');
const bodyparser= require('body-parser');
const dotenv=require('dotenv');
const morgan=require('morgan');
const app=express();
const PORT=process.env.PORT||5000;
dotenv.config({path:'config.env'});
const connectDB=require('./server/database/connection');

//log requests
app.use(morgan('tiny'));
//mongodb connection
connectDB();

//pass request to body parser 
app.use(bodyparser.urlencoded({extended:true}))

//set view engines
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"));

//load assets

app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//load route
app.use('/',require('./server/routes/router'));


app.listen(PORT,()=>{
    console.log("server is running");
})
