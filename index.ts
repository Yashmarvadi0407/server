//  require("dotenv").config()
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser')
// const cors=require('cors')

// //middleware
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(cors())

// const port=process.env.PORT || 3000
// require('./database/conn')
// const {adduser, updateuser, deleteuser, deletealluser, getuseralldata}=require('./controller/usercontroller')


// //Router 
// //post data
// app.post('/',adduser)

// //updatedata
// app.patch('/update',updateuser)

// //delete data
// app.delete('/delete',deleteuser)

// // //deletealluser
// app.delete('/deletemany',deletealluser)


// //getdata
// app.get("/getdata",getuseralldata)


// app.listen(port,(req,res)=>{
//     console.log(`server is listening at port ${port} `);

// })


// import * as express from 'express';
// import * as dotenv from 'dotenv'
import  dotenv =require( 'dotenv');
import  express =require('express');
import  bodyParser=require('body-parser');
import  cors =require ('cors');
import { addUser, updateUser, deleteUser, deleteAllUsers,getAllUserData  } from './controller/usercontroller';
import './database/conn';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Router
app.post('/', addUser); // Post data

app.patch('/update', updateUser); // Update data

app.delete('/delete', deleteUser); // Delete data

app.delete('/deletemany', deleteAllUsers); // Delete all users

 app.get('/getdata', getAllUserData); // Get data

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
