const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
email : {
type:String, 
required:true, 
index: {unique: true, dropDups: true}
},
password: {
type:String, 
required:true
},
token: {
type:String, 
required:true
},
fullName: {
type:String, 
required:true
},
phoneNumber: {
type:String, 
required:true
} ,
domain: {
    type:String, 
    required:true
} , 
type:{
type:String, 
enum : ['user','admin' , 'moderator' , 'superadmin' ],
},
todolist: 
    {
        type : String ,
    } ,
})
module.exports=mongoose.model('User',userSchema)