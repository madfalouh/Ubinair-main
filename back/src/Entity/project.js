const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
name : {
type:String, 
required:true , 
index: {unique: true, dropDups: true}
},
price : {
type:Number, 
required:true, 
},
files :
[
{
name : String ,
data : Buffer , 
contentType : String, 
} ], 
progress : {
type:Number, 
required:true , 
},
deadline: {
type:String, 
required:true , 
},
})
module.exports=mongoose.model('Project',projectSchema)