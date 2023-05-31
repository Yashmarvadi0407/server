"use strict";
//  require("dotenv").config()
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser')
// const cors=require('cors')
Object.defineProperty(exports, "__esModule", { value: true });
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
var dotenv = require("dotenv");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var usercontroller_1 = require("./controller/usercontroller");
require("./database/conn");
dotenv.config();
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Router
app.post('/', usercontroller_1.addUser); // Post data
app.patch('/update', usercontroller_1.updateUser); // Update data
app.delete('/delete', usercontroller_1.deleteUser); // Delete data
app.delete('/deletemany', usercontroller_1.deleteAllUsers); // Delete all users
app.get('/getdata', usercontroller_1.getAllUserData); // Get data
app.listen(port, function () {
    console.log("Server is listening at port ".concat(port));
});
