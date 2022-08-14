const Projets = require('../models/projetModel')
const User = require('../models/userModel')
const uuid = require('uuid')
const project_add =require( './Projet/project_add' )
const project_delete =require( './Projet/project_delete')
const project_get= require( './Projet/project_get')
const project_update =require( './Projet/project_update')

const projetsCtrl = {
    addProjet: project_add.addProjet ,
    addBriefProject:  project_add.addBriefProject ,
    addBrandProject: project_add.addBrandProject ,   
    addQuotesProject: project_add.addQuotesProject ,
    addInvoicesProject: project_add.addInvoicesProject ,
    addMediaProject:  project_add.addMediaProject ,


    getMyprojects: project_get.getMyprojects ,
    getAllProjects: project_get.getAllProjects,
    getProjectdetails: project_get.getProjectdetails ,


    updateProject: project_update.updateProject ,
    updateTasksClient: project_update.updateTasksClient ,
    updateSpecProject: project_update.updateSpecProject ,
    updateColorsProject: project_update.updateColorsProject ,
    updateFontsProject: project_update.updateFontsProject ,
    updateContentProject: project_update.updateContentProject ,
  



    deleteProject: project_delete.deleteProject ,  
    deleteBriefFileProject: project_delete.deleteBriefFileProject ,
    deleteImgMBProject: project_delete.deleteImgMBProject ,
    deleteQuotesProject: project_delete.deleteQuotesProject ,
    deleteInvoicesProject: project_delete.deleteInvoicesProject ,
    deleteMediaProject: project_delete.deleteMediaProject ,
}
module.exports = projetsCtrl
