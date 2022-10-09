import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from '../../components/ProjectCard'
import Sidebar from '../../components/sidebar'
import AddCard from '../../components/AddCard'
import '../Auth/styles/project.css'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { addAproject, changeOne, listMyProjects } from '../../redux/actions/projectActions'
import call from '../../img/call.png'
import addText from '../../img/addText.png'
import listimage from '../../img/listimage.png'
import searchIcon from '../../img/search-icon.png'
import filter from '../../img/filter.png'
const Project = () => {
    const cardRef = useRef()
    const cardsRef = useRef()
    const addRef = useRef()
    const bodyRef = useRef()
    const dashRef = useRef()
    const secondRef = useRef()
    const fileRef = useRef()
    const dispatch = useDispatch()
    const [projectCards, setCards] = useState([])
    const [open, setOpen] = useState(false)
    const [one, setOne] = useState(false)
    const [base64, setBase64] = useState("")
    const [files, setFiles] = useState([])
    const [iframe, setIframe] = useState([])
    const popupOpen = useRef()
    const getProjects = useSelector((state) => state.ListMyProjectsReducer)

    const { projects } = getProjects
    const [searchTerm, setSearchTerm] = useState('')
    const [optionPrj, setOptionPrj] = useState(true)


    useEffect(() => {

        dispatch(listMyProjects())


    }, [])


    useEffect(() => {

        if (projects != undefined) {
            const temp = []
            projects.map((project) => {
                var date1 = new Date(project.deadline);
                var date2 = new Date(project.startDate);
                var deadline = Math.floor((date1.getTime() - Date.now()) / (1000 * 3600 * 24));
                var period = Math.floor((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24));
                console.log(period);
                //console.log(Date.now()/date1.getTime());
                console.log(one);
                const info = {
                    id : project._id ,
                    name: project.name,
                    price: project.price,
                    progress: project.progress,
                    deadline: deadline,
                    period: period,
                    status: project.status,
                    one: one,
                    files: project.files,
                    iframe: setIframe,
                    popupOpen: popupOpen
                }
                temp.push(<ProjectCard cards={cardRef} info={info} setIframe={setIframe} ></ProjectCard>)

            })
            console.log(temp);
            setCards(temp)

        }
    }, [getProjects])



    useEffect(() => {
        if (cardRef.current.childNodes[0] != undefined) {
            if (projectCards.length <= 1) {
                dispatch(changeOne(true))
                setOpen(false)
                setOne(true)
            } else {
                const nodes = cardRef.current.childNodes[0]
                const bottomSection = nodes.childNodes[2]
                if (bottomSection != undefined) {
                    dispatch(changeOne(false))
                    setOpen(true)
                    setOne(false)
                }
            }
        }
    }, [projectCards])

    const hundleType = (e) => {
        console.log(e.target.value);
        setSearchTerm(e.target.value)
        const temp = []
        const resultsArray = projects.filter(project => project.name.toLocaleLowerCase().includes(e.target.value))
        resultsArray.map((project) => {
            var date1 = new Date(project.deadline);
            var date2 = new Date(project.startDate);
            var deadline = Math.floor((date1.getTime() - Date.now()) / (1000 * 3600 * 24));
            var period = Math.floor((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24));
            const info = {
                id : project._id ,
                name: project.name,
                price: project.price,
                progress: project.progress,
                deadline: deadline,
                status: project.status,
                period: period,
                one: one,
                files: project.files
            }
            temp.push(<ProjectCard cards={cardRef} info={info} ></ProjectCard>)
        })
        setCards(temp)
    }

    const hundleFilter = (e) => {
        console.log(e);
        const temp = []
        const resultsArray = projects.filter(project => project.status.toLocaleLowerCase().includes(e))
        resultsArray.map((project) => {
            var date1 = new Date(project.deadline);
            var deadline = Math.floor((date1.getTime() - Date.now()) / (1000 * 3600 * 24));
            const info = {
                id : project._id ,
                name: project.name,
                price: project.price,
                progress: project.progress,
                deadline: deadline,
                status: project.status
            }
            temp.push(<ProjectCard cards={cardRef} info={info} ></ProjectCard>)
        })
        setCards(temp)
    }


    const hundleClick = () => {
        console.log(files);


        let data = new FormData()


        data.append("name", "TestProject123252");
        data.append("price", 12);
        files.map((file) => { data.append("file", file) })
        data.append("progress", 41);
        data.append("deadline", "10/21/2022");
        data.append("status", "not yet");


        dispatch(addAproject(data))
    }


    const hundleClick1 = () => {

        const data = getProjects.projects[3].files[0].data.data

        console.log(data);
        const base64String = btoa(new Uint8Array(data).reduce(function (data, byte) {

            return data + String.fromCharCode(byte);
        }, ''));

        setBase64(base64String)

        let temp = []



        temp.push(<object data={"data:application/pdf;base64," + base64String} style={{ width: 100 + "%", height: 1000 + "px" }} ></object>)

        setIframe(temp)

        const popupOpen = document.querySelector(".pop-up");
        popupOpen.classList.add("open");

    }

    const hundleclose = () => {
        const popupOpen = document.querySelector(".pop-up");
        popupOpen.classList.remove("open");
    }

    


    return (

        <div className='project-containar'   >

            <div class="pop-up" ref={popupOpen} >
                <div class="content-text">
                    <div class="pop-up-container">
                        <i class="fa fa-window-close fa-2x close" onClick={hundleclose}>X</i>
                        <div class="text-box">
                            {iframe}
                        </div>

                    </div>
                </div>
            </div>
            <Sidebar el={dashRef} card={cardRef} cards={cardsRef} second={secondRef} ></Sidebar>


            <div className='container' ref={dashRef} >
                <p className='dashboard-text' > Dashboard </p>

                <div className='header-element' >
                    {/* <div className='projects'>
                           <select name="format" id="format">
                            <option value="pdf">Project</option>
                            <option value="txt">Estimation</option>
                            </select>
                    </div> */}
                    <div className='dashboard-select-button'>
                        <button className={classNames('ds-button-option', {
                            "selected-option" : optionPrj
                        })} value='pdf' onClick={() => setOptionPrj(true)}>Projets</button>
                        <button className={classNames('ds-button-option', {
                            "selected-option" : !optionPrj
                        })} value='txt' onClick={() => setOptionPrj(false)}>Estimations</button>

                    </div>

                    <div className='search'>
                        <img src={searchIcon} className="searchIcon" ></img>
                        <input className='search-box' placeholder='Recherche' onChange={event => { hundleType(event) }} />
                    </div>
                </div>

                <div className='body-elements' ref={bodyRef} >


                    <div className='first-section' ref={cardsRef}  >
                        <div className={classNames('cards', {
                            "isopen": open,
                            "isone": one
                        })} ref={cardRef}  >
                            {projectCards}
                            <div ref={addRef} onClick={hundleClick} >
                                <AddCard ></AddCard>
                            </div>
                        </div>
                    </div>


                    <div className='second-section' ref={secondRef} >

                        <div className='todo-list' >
                            <p className='todo-title'  >Liste à faire</p>
                            <ul className='todo-text' >
                                <li><div className='listimg' ><img src={listimage}   ></img><p  >télécharger les images</p></div></li>
                                <li><div className='listimg' ><img src={listimage}   ></img><p  >télécharger les noms</p></div></li>
                                <li><div className='listimg'><img src={listimage}   ></img><p  >télécharger les pdf</p></div></li>
                                <li><div className='listimg'><img src={listimage}   ></img><p  >télécharger la facture</p></div></li>

                            </ul>
                            <img src={addText} className="add-text" ></img>
                        </div>
                        <div className='contact' >
                            <div className='chat' >chat w/ PM</div>
                            <div className='call' ><img src={call}></img> </div>
                        </div>
                    </div>







                </div>





            </div>




        </div>
    )
}

export default Project
