const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = 3000
const url= `mongodb+srv://madfalouh:0653925271@cluster0.6q3wt.mongodb.net/alphadb`
const app = express()
app.use(cors())

mongoose.connect(url)
const con = mongoose.connection
app.use(express.json())
con.on('open' , ()=>{
console.log("connected..");
})


app.get('/',(req , res)=>{
res.send("app is working")
})




const userController = require('./Controllers/userController')
const projectController = require('./Controllers/projectController')
const AuthController = require('./Controllers/AuthController')
const messageController = require('./Controllers/messageController');
app.use('/users',userController)
app.use('/projects',projectController)
app.use('/auth',AuthController)
app.use('/chat',messageController.router)
const server = require('http').createServer(this.app);
messageController.initSockets(server)
app.listen(port, ()=> {

console.log(`port is listening on ${port}`);

})