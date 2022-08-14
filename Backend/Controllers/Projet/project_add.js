const Projets = require('../../models/projetModel')
const User = require('../../models/userModel')
const uuid = require('uuid')

const project_add = {

    addProjet: async (req, res) => {
        try {
            const {
                name,
                devis,
                plan,
                priceDebut,
                priceRequired,
                stateOfAdvance,
                description,
                subtype,
                type,
                //specification,
                features,
            } = req.body

            // console.log('--------------req booody-------------', req)
            const projet = new Projets({
                user: req.user.id,
                name: name,
                devis: devis,
                plan: plan,
                features: features,
                specification: [
                    { title: 'Design', progresState: 0, estimatedState: 0 },
                    {
                        title: 'Integration',
                        progresState: 0,
                        estimatedState: 0,
                    },
                    { title: 'Content', progresState: 0, estimatedState: 0 },
                ],
                projectColors: [
                    {
                        title: 'Base (60%) - ex. backgrounds',
                        hexs: [
                            { id: uuid.v1(), hexCode: '#000' },
                            { id: uuid.v1(), hexCode: '#000' },
                            { id: uuid.v1(), hexCode: '#000' },
                        ],
                    },

                    {
                        title: 'Contrast (30%) - ex. text',
                        hexs: [
                            { id: uuid.v1(), hexCode: '#000' },
                            { id: uuid.v1(), hexCode: '#000' },
                            { id: uuid.v1(), hexCode: '#000' },
                        ],
                    },

                    {
                        title: 'Accents (10%) - ex. buttons',
                        hexs: [
                            { id: uuid.v1(), hexCode: '#000' },
                            { id: uuid.v1(), hexCode: '#000' },
                            { id: uuid.v1(), hexCode: '#000' },
                        ],
                    },
                ],
                projectFonts: [
                    { title: 'Title', font: 'Arial', size: '18px' },
                    { title: 'Subtitle', font: 'Helvetica', size: '16px' },
                    { title: 'Paragraph', font: 'Verdana', size: '12px' },
                ],

                priceDebut: priceDebut,
                priceRequired: priceRequired,
                stateOfAdvance: stateOfAdvance,
                description: description,
                subtype: subtype,
                type: type,
                clientBrief: {
                    visualInspiration: [],
                    briefFiles: [],
                },
                files: {
                    QuotesFiles: [],
                    InvoicesFiles: [],
                },
                contents: [
                    {
                        media: [],
                    },
                ],
            })
            const user = await User.findById(req.user.id)
            if (user) {
                user.projets.push(projet)
            }
            await user.save()
            const addProjet = await projet.save()
            //res.status(400).json(addProjet,{ msg: "Projet has been add!" });
            console.log('addProjet', addProjet)
            res.json({ msg: 'addProjet Success!' })
        } catch (err) {
            console.log('-----------Add prjt error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },


    addBriefProject: async (req, res) => {
        try {
            const { info } = req.body
            // console.log('--------------req body -------------', req.body)
            const visualInspirationReq = req.body.data.map((p) => ({
                public_id: p.public_id,
                format: p.format,
                startDate: p.start,
                secure_url: p.secure_url,
                sizeInBytes: p.bytes,
            }))

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.clientBrief.visualInspiration =
                    projet.clientBrief.visualInspiration.concat(
                        visualInspirationReq
                    ) || projet.clientBrief.visualInspiration
                projet.clientBrief.websiteInspiration =
                    info.webinspiration || projet.clientBrief.websiteInspiration
                const updatedProject = await projet.save()
                //    console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },

   addBrandProject: async (req, res) => {
        try {
            const { info } = req.body
            console.log('--------------req body -------------', req.body)
            const briedFilesReq = req.body.data.map((p) => ({
                public_id: p.public_id,
                format: p.format,
                startDate: p.start,
                secure_url: p.secure_url,
                sizeInBytes: p.bytes,
                fileName: p.tags[0],
            }))

            // // console.log(
            // //     '--------------req visualInspirationReq 1-------------',
            // //     visualInspirationReq
            // // )

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.clientBrief.briefFiles =
                    projet.clientBrief.briefFiles.concat(briedFilesReq) ||
                    projet.clientBrief.briefFiles
                projet.clientBrief.brandName =
                    info.brandName || projet.clientBrief.brandName
                projet.clientBrief.brandTageLine =
                    info.brandTageLine || projet.clientBrief.brandTageLine
                projet.clientBrief.ProductService =
                    info.ProductService || projet.clientBrief.ProductService
                projet.clientBrief.values =
                    info.values || projet.clientBrief.values
                projet.clientBrief.vision =
                    info.vision || projet.clientBrief.vision
                projet.clientBrief.mission =
                    info.mission || projet.clientBrief.mission
                projet.clientBrief.objectives =
                    info.objectives || projet.clientBrief.objectives
                projet.clientBrief.toneOfVoice =
                    info.toneOfVoice || projet.clientBrief.toneOfVoice
                projet.clientBrief.targetAudience =
                    info.targetAudience || projet.clientBrief.targetAudience
                projet.clientBrief.competitors =
                    info.competitors || projet.clientBrief.competitors
                projet.clientBrief.moreInfo =
                    info.moreInfo || projet.clientBrief.moreInfo

                const updatedProject = await projet.save()
                //    console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
   addQuotesProject: async (req, res) => {
        try {
            const briedFilesReq = req.body.data.map((p) => ({
                public_id: p.public_id,
                format: p.format,
                startDate: p.start,
                secure_url: p.secure_url,
                sizeInBytes: p.bytes,
                fileName: p.tags[0],
            }))

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.files.QuotesFiles =
                    projet.files.QuotesFiles.concat(briedFilesReq) ||
                    projet.files.QuotesFiles

                const updatedProject = await projet.save()
                //    console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },
    addInvoicesProject: async (req, res) => {
        try {
            const briedFilesReq = req.body.data.map((p) => ({
                public_id: p.public_id,
                format: p.format,
                startDate: p.start,
                secure_url: p.secure_url,
                sizeInBytes: p.bytes,
                fileName: p.tags[0],
            }))

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.files.InvoicesFiles =
                    projet.files.InvoicesFiles.concat(briedFilesReq) ||
                    projet.files.InvoicesFiles

                const updatedProject = await projet.save()
                //    console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },    addMediaProject: async (req, res) => {
        try {
            const { ChosenId } = req.body
            console.log('req body : ', ChosenId)
            const imagesReq = req.body.data.map((p) => ({
                public_id: p.public_id,
                format: p.format,
                startDate: p.start,
                secure_url: p.secure_url,
                sizeInBytes: p.bytes,
                fileName: p.tags[0],
            }))

            const projet = await Projets.findById(req.params.id)

            if (projet) {
                projet.contents.map((c) => {
                    if (c._id == ChosenId)
                        c.media = c.media.concat(imagesReq) || c.media
                })

                const updatedProject = await projet.save()
                //    console.log('updatedProject', updatedProject)
                res.json({ msg: 'Update prj Success!' })
            }
        } catch (err) {
            console.log('-----------Update prj error-------------', err)
            return res.status(500).json({ msg: err.message })
        }
    },



}

module.exports = project_add