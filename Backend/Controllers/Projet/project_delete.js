const Projets = require('../../models/projetModel')
const User = require('../../models/userModel')
const uuid = require('uuid')


const project_delete = {


    deleteProject: async (req, res) => {
        const project = await Projets.findById(req.params.id)
        if (project) {
            await project.remove()
            res.json({ message: 'Project Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },    deleteBriefFileProject: async (req, res) => {
        const { public_id } = req.body
        console.log('--------------req body -------------', req.body)
        const project = await Projets.findById(req.params.id)
        if (project) {
            const newBriefFiles = project.clientBrief.briefFiles.filter(
                (fw) => fw.public_id !== public_id
            )
            project.clientBrief.briefFiles =
                newBriefFiles || projet.clientBrief.briefFiles

            const updatedProject = await project.save()
            res.json({ message: 'File Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },    deleteImgMBProject: async (req, res) => {
        const { public_id } = req.body
        console.log('--------------req body -------------', req.body)
        const project = await Projets.findById(req.params.id)
        if (project) {
            const newvisualInspirations =
                project.clientBrief.visualInspiration.filter(
                    (fw) => fw.public_id !== public_id
                )
            project.clientBrief.visualInspiration =
                newvisualInspirations || projet.clientBrief.visualInspiration

            const updatedProject = await project.save()
            res.json({ message: 'File Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },
deleteQuotesProject: async (req, res) => {
        const { public_id } = req.body
        console.log('--------------req body -------------', req.body)
        const project = await Projets.findById(req.params.id)
        if (project) {
            const newQuotesFiles = project.files.QuotesFiles.filter(
                (fw) => fw.public_id !== public_id
            )
            project.files.QuotesFiles =
                newQuotesFiles || project.files.QuotesFiles

            const updatedProject = await project.save()
            res.json({ message: 'File Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },
    deleteInvoicesProject: async (req, res) => {
        const { public_id } = req.body
        console.log('--------------req body -------------', req.body)
        const project = await Projets.findById(req.params.id)
        if (project) {
            const newInvoicesFiles = project.files.InvoicesFiles.filter(
                (fw) => fw.public_id !== public_id
            )
            project.files.InvoicesFiles =
                newInvoicesFiles || project.files.InvoicesFiles

            const updatedProject = await project.save()
            res.json({ message: 'File Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },   deleteMediaProject: async (req, res) => {
        const { ChosenId } = req.body
        console.log('req body : ', ChosenId)
        const { public_id } = req.body
        console.log('--------------req body -------------', req.body)
        const project = await Projets.findById(req.params.id)
        if (project) {
            project.contents.map((c) => {
                if (c._id == ChosenId)
                    c.media = c.media.filter((fw) => fw.public_id !== public_id)
            })

            const updatedProject = await project.save()
            res.json({ message: 'File Removed' })
        } else {
            // status it's 500 by default cuz of errHandler
            res.status(404)
            throw new Error('Project not found')
        }
    },

}

module.exports = project_delete