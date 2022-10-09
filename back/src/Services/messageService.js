const express = require('express');
const Message= require('../Entity/message');
const router = express.Router()
const WebSocket = require('ws');

module.exports = {
findmessages :async function findmessages (Message) {
let messages
try{
messages = await Message.find()
}catch(err){
res.send(err)
}
return messages
},
findmessagebyuser:async function  findmessagebyuser (Message,userId) {
let messages
try{
messages = await Message.find({ "$or":[ {userId:userId} , {receiverId:userId}]}).sort({date:1})
}catch(err){
console.log(err);
}
return messages
},addmessage:async function addmessage (message){
try{
await message.save()
}catch(err){
console.log(err);
}
}
}


