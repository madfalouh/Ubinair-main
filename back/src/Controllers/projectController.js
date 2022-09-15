const express = require('express');
const router = express.Router()
const Project = require('../Entity/project')
const projectService = require("../Services/projectService")
const multer = require('multer');
const fs = require("fs");

router.get('/' , findprojects)
router.get('/:id' , findprojectsbyid)
router.post('/' , addproject)
router.post('/delete' , deleteproject)
router.post('/update' , updateproject)
async function findprojects (req , res) {
try{
const projects = await projectService.findprojects(Project)
res.send(projects)
}catch(err){
return res.status(500).json({ msg: err.message })
}
}
async function  findprojectsbyid (req , res) {
try{
const projects = await projectService.findprojectsbyid(Project,req.params.id)
//res.send(projects)
}catch(err){
return res.status(500).json({ msg: err.message })

}
}
async function  findprojectbyname (project) {
try{
const projects = await projectService.findprojectbyname(Project,project)
res.send(projects) 
}catch(err){
console.log(err);
}
}

async function addproject (req , res){
//let {data , mimetype} = null
const project = new Project({
name:req.body.name , 
price: req.body.price,
progress:req.body.progress , 
deadline:req.body.deadline , 
files :  {
  data: null,
  contentType: null,
}
})
try{

await projectService.addproject(project)
console.log("added");
res.send(project)
}catch(err){

console.log(err);

}

}

async function  deleteproject (req , res) {
console.log(req.body);
try{
const projects = await projectService.deleteproject(req.body.id)
res.send("deleted")
}catch(err){
return res.status(500).json({ msg: err.message })

}
}


async function  updateproject (req , res) {
console.log(req.body);
const project =({
id : req.body.id ,
name:req.body.name , 
price: req.body.price,
progress:req.body.progress , 
deadline:req.body.deadline , 
})
try{
const projects = await projectService.updateproject(project)
res.send(projects)
}catch(err){
return res.status(500).json({ msg: err.message })

}
}




module.exports=router