const express = require('express');
const Project = require('../Entity/project');
const router = express.Router()
module.exports = {
findprojects :async function findprojects (Project) {
let projects
try{
projects = await Project.find()
}catch(err){
res.send(err)
}
return projects
},
findprojectsbyid:async function  findprojectsbyid (Project,id) {
let projects
try{
projects = await Project.findById(id)
}catch(err){
res.send(err)
}
return projects
},
findprojectbyname:async function  findprojectbyname (Project,project) {
let projects
try{
projects = await Project.find({name:project})
}catch(err){
console.log(err);
}
return projects
},addproject:async function addproject (project){

try{
await project.save()
}catch(err){
console.log(err);
}
},deleteproject:async function deleteproject (id){
try{
await Project.deleteOne({_id:id})
}catch(err){
console.log(err)
}
}, updateproject : async function updateproject(project) {  
try{
await Project.findByIdAndUpdate(project.id ,{ 
name : project.name,  
price :project.price ,
description: project.description,
 },function (err, docs) {
})
}catch(err){
}
}
}