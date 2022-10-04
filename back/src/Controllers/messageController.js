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
    let hh = today.getHours;
    let mn = today.getMinutes;
    let ss = today.getSeconds;
    const message = new Message({
        content: req.body.content,
        userId: req.body.userId,
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        date: mm + "/" + dd + "/" + yyyy + "/" + hh + ":" + mn + ":" + ss,
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
    const wss = new WebSocket.Server({ server: server, path: 'localhost:3000/api/chats' });
    wss.on('connection', (ws, req) => {
        console.log('A new client Connected!');
        ws.on('message', async (message) => {
            const messageStored = addmessage(JSON.parse(message.toString()))
            console.log(messageStored);
            wss.clients.forEach((client) => {
                if (messageStored) {
                    client.send(JSON.stringify(messageStored));
                    console.log(messageStored);
                } else {
                    client.send('ERROR');
                }
            });
        });
    }
    )
}





module.exports = {router: router , initSockets: initSockets }

