const express = require('express');
const router = express.Router()
const Message = require('../Entity/message')
const messageService = require("../Services/messageService")
const multer = require('multer');
const fs = require("fs");
const WebSocket = require('ws');
router.get('/', findmessages)
router.get('/:id', findmessagebyuser)
router.post('/', addmessage)
async function findmessages(req, res) {
    try {
        const messages = await messageService.findmessages(Message)
        res.send(messages)
    } catch (err) {
        return res.status(500).json({ msg: err })
    }
}
async function findmessagebyuser(req, res) {
    try {
        console.log(req.params.id)
        const messageaddmessages = await messageService.findmessagebyuser(Message, req.params.id)
        res.send(messageaddmessages)
    } catch (err) {
        console.log(err);
    }
}
async function addmessage(req, res) {
    const today = new Date()
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let hh = today.getHours();
    let mn = today.getMinutes();
    let ss = today.getSeconds();
    const message = new Message({
        content: req.body.content,
        userId: req.body.userId,
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        date: today,
    })
    try {
        await messageService.addmessage(message)
        console.log("added");
        res.send(message)
    } catch (err) {
        console.log(err);
    }
}
function initSockets(server) {


console.log(server);
    const wss = new WebSocket.Server({ server: server, port: 8000  });
   
    wss.on('connection', (ws, req) => {
        console.log('A new client Connected!');
        ws.on('message', async (message) => {
            const today = new Date()
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();
            let hh = today.getHours();
            let mn = today.getMinutes();
            let ss = today.getSeconds();
            const messageStored = JSON.parse(message.toString())
            const messageObj = new Message({
                content: messageStored.content,
                userId: messageStored.userId,
                senderId: messageStored.senderId,
                receiverId: messageStored.receiverId,
                date: today,
            })
            try {
                await messageService.addmessage(messageObj)
                console.log("added");
            } catch (err) {
                console.log(err);
            }
            wss.clients.forEach((client) => {
                if (messageStored) {
                    client.send(JSON.stringify(messageStored));
                    
                } else {
                    client.send('ERROR');
                }
            });
        });
    }
    )
}





module.exports = {router: router , initSockets: initSockets  }

