const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
content : {
type:String, 
required:true , 
},
userId : {
type:String, 
required:true, 
},
senderId : {
type:String, 
required:true , 
},
receiverId: {
type:String, 
required:true , 
},
date: {
type:String, 
required:true , 
}
})
module.exports=mongoose.model('Message',messageSchema)