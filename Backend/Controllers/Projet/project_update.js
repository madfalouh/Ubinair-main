const Projets = require('../../models/projetModel')
const User = require('../../models/userModel')
const uuid = require('uuid')


const project_update = {



 updateProject: async (req, res) => {
        try {
            let sum = 0
            const { startDate, endDate } = req.body[0]

            // console.log('--------------req booody 1-------------', req.body)

            let specification = req.body.filter((v, k) => k !== 0)
            // console.log('---------specification ------', specification)

            const projet = await Projets.findById(req.params.id)
            const sub = projet.specification.map((s) => s.progresState)
            for (let i = 0; i < sub.length; i++) {
                sum += sub[i]
            }
            let total = Math.round(sum / sub.length)

            if (projet) {
                projet.createdAt = startDate || projet.createdAt
                projet.finishedAt = endDate || projet.finishedAt
                projet.specification = specification || projet.specification
                projet.totalProgresState = total
                const updatedProject = await projet.save()
                console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    updateTasksClient: async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const taskss = req.body.taskss

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.clientTaskss = taskss || projet.clientTaskss
                const updatedProject = await projet.save()
                console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    updateSpecProject: async (req, res) => {
        try {
        

            const newSpecification = req.body.specification
            // console.log('sended spec ', JSON.stringify(req.body))
            const projet = await Projets.findById(req.params.id)
            // console.log(
            //     'prj spec---------------',
            //     JSON.stringify(projet) + 'id= ' + req.params.id
            // )
            if (projet) {
                projet.specification = newSpecification || projet.specification
                // console.log('it enter')
                const updatedProject = await projet.save()
                console.log('updatedSpecProject----------', updatedProject)
                res.json({ msg: 'Update spec prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update spec prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },

    updateColorsProject: async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const newColors = req.body.colorsState
            console.log('sended Colors ', JSON.stringify(req.body))
            const projet = await Projets.findById(req.params.id)
            console.log(
                'prj Colors---------------',
                JSON.stringify(projet) + 'id= ' + req.params.id
            )
            if (projet) {
                projet.projectColors = newColors || projet.projectColors
                const updatedProject = await projet.save()
                console.log('updatedColorsProject----------', updatedProject)
                res.json({ msg: 'Update colors prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update colors prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },

    updateFontsProject: async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const newFonts = req.body.fontStyles
            console.log('sended fonts ', JSON.stringify(req.body))
            const projet = await Projets.findById(req.params.id)
            console.log(
                'prj fonts---------------',
                JSON.stringify(projet) + 'id= ' + req.params.id
            )
            if (projet) {
                projet.projectFonts = newFonts || projet.projectFonts
                const updatedProject = await projet.save()
                console.log('updatedfontsProject----------', updatedProject)
                res.json({ msg: 'Update colors prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update fonts prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },

    updateContentProject: async (req, res) => {
        try {
            // console.log('--------------req booody -------------', req.body)

            const newContents = req.body.Contents
            console.log('sended contents ', JSON.stringify(req.body))
            const projet = await Projets.findById(req.params.id)
            console.log(
                'prj contents---------------',
                JSON.stringify(projet) + 'id= ' + req.params.id
            )
            if (projet) {
                projet.contents = newContents || projet.contents
                const updatedProject = await projet.save()
                console.log('updatedcontentsProject----------', updatedProject)
                res.json({ msg: 'Update contents prj Success!' })
            }
        } catch (err) {
            console.log(
                '-----------Update contents prj error-------------',
                err
            )
            return res.status(500).json({ msg: err.message })
        }
    },

}

module.exports = project_update