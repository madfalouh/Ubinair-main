const Projets = require('../../models/projetModel')
const User = require('../../models/userModel')
const uuid = require('uuid')



const project_get = {
    getMyprojects: async (req, res) => {
        try {
            const keyword = req.query.keyword ? {
                name : {
                    $regex : req.query.keyword,
                    $options : 'i'
                }
            } : {}
            const projects = await Projets.find({ user: req.user.id ,...keyword})
            res.json(projects)
        } catch (err) {
            console.log('-----------myprojets error-------------')

            console.log(err)
            return res.status(500).json({ msg: err.message })
        }
    },   getProjectdetails: async (req, res) => {
        try {
            let sum = 0
            let projects = await Projets.findById(req.params.id).populate(
                'user',
                '-_id name  avatar'
            )
            //  const projecta = await Projets.find({},{"specification.estimatedState" :0})

            const sub = projects.specification.map((s) => s.progresState)
            for (let i = 0; i < sub.length; i++) {
                sum += sub[i]
            }
            let total = Math.round(sum / sub.length)

            if (projects) {
                projects.totalProgresState = total
            }
            const updatedProjet = await projects.save()
            res.json(updatedProjet)
        } catch (error) {
            console.log('------------project details error----------')
            console.log(error)
            return res.status(500).json({ msg: error.message })
        }
    },  getAllProjects: async (req, res) => {
        try {
            const keyword = req.query.keyword ? {
                name : {
                    $regex : req.query.keyword,
                    $options : 'i'
                }
            } : {}
            const projects = await Projets.find({...keyword}).populate(
                'user',
                '-_id name  avatar role'
            )
            res.json(projects)
        } catch (err) {
            console.log('-----------All Prj error-------------')

            console.log(err)
            return res.status(500).json({ msg: err.message })
        }
    },    getMyprojects: async (req, res) => {
        try {
            const keyword = req.query.keyword ? {
                name : {
                    $regex : req.query.keyword,
                    $options : 'i'
                }
            } : {}
            const projects = await Projets.find({ user: req.user.id ,...keyword})
            res.json(projects)
        } catch (err) {
            console.log('-----------myprojets error-------------')

            console.log(err)
            return res.status(500).json({ msg: err.message })
        }
    },  getProjectdetails: async (req, res) => {
        try {
            let sum = 0
            let projects = await Projets.findById(req.params.id).populate(
                'user',
                '-_id name  avatar'
            )
            //  const projecta = await Projets.find({},{"specification.estimatedState" :0})

            const sub = projects.specification.map((s) => s.progresState)
            for (let i = 0; i < sub.length; i++) {
                sum += sub[i]
            }
            let total = Math.round(sum / sub.length)

            if (projects) {
                projects.totalProgresState = total
            }
            const updatedProjet = await projects.save()
            res.json(updatedProjet)
        } catch (error) {
            console.log('------------project details error----------')
            console.log(error)
            return res.status(500).json({ msg: error.message })
        }
    },    getAllProjects: async (req, res) => {
        try {
            const keyword = req.query.keyword ? {
                name : {
                    $regex : req.query.keyword,
                    $options : 'i'
                }
            } : {}
            const projects = await Projets.find({...keyword}).populate(
                'user',
                '-_id name  avatar role'
            )
            res.json(projects)
        } catch (err) {
            console.log('-----------All Prj error-------------')

            console.log(err)
            return res.status(500).json({ msg: err.message })
        }
    },

}

module.exports = project_get