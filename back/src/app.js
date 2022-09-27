const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose');
const fs = require("fs");
var fileupload = require("express-fileupload");
const cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const port = process.env.PORT
const hostname = process.env.DB_HOSTNAME
const url= `mongodb://${hostname}/alphadb`
const app = express()
app.use(cors())
app.use(fileupload());
mongoose.connect(url)
const con = mongoose.connection
app.use(express.json())
con.on('open' , ()=>{
console.log("connected...");
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});






app.get('/',(req , res)=>{
res.send("app is working")
})




const userController = require('./Controllers/userController')
const projectController = require('./Controllers/projectController')
const AuthController = require('./Controllers/AuthController')
const project = require('./Entity/project');
const req = require('express/lib/request');
app.use('/users',userController)
app.use('/projects',projectController)
app.use('/Auth',AuthController)
app.listen(port, ()=> {

console.log(`port is listening on ${port}`);

})