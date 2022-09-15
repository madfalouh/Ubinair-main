import React, { useState, useEffect, useRef } from 'react'
import ProjectCard  from '../../components/ProjectCard'
import Sidebar from '../../components/sidebar'
import AddCard from '../../components/AddCard'
import '../Auth/styles/project.css'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { listMyProjects } from '../../redux/actions/projectActions'


const Project = () => {
    const cardRef = useRef()
    const cardsRef = useRef()
    const addRef = useRef()
    const bodyRef = useRef()
    const dashRef = useRef()
    const secondRef = useRef()
    const dispatch = useDispatch()
    const [projectCards, setCards] = useState([])
    const [open, setOpen] = useState(false)
    const [one, setOne] = useState(false)
    const getProjects = useSelector((state) => state.ListMyProjectsReducer)
    const {projects} = getProjects
    const [searchTerm , setSearchTerm] = useState('')

    useEffect(() => {
      
        dispatch(listMyProjects())
  

    }, [])


    useEffect(() => {

    if(projects!=undefined && projects[0]!=undefined ){
        const temp = []
            projects.map((project) =>{
        var date1 = new Date(project.deadline);
        var deadline= Math.floor( (date1.getTime() -Date.now())/ (1000 * 3600 * 24) )  ;
        console.log(project);
        const info = {
            name : project.name,
            price : project.price ,
            progress : project.progress , 
            deadline : deadline , 
            status : project.status
            }
        temp.push(<ProjectCard cards={cardRef} info={info} ></ProjectCard>)

            }  )
    
        setCards(temp)
        
    }
    }, [getProjects])



    useEffect(() => {
        if (cardRef.current.childNodes[0] != undefined) {
           
            if (projectCards.length <= 1) {
            setOpen(false)
             setOne(true)
            }else{
        const nodes = cardRef.current.childNodes[0]
        const bottomSection = nodes.childNodes[2]
        if (bottomSection != undefined) {
            setOpen(true)
            setOne(false)
        }
            }
        }
    }, [projectCards])

  const hundleType = (e) =>{
console.log(e.target.value);
    setSearchTerm(e.target.value)
    const temp = []
        const resultsArray = projects.filter(project => project.name.toLocaleLowerCase().includes(e.target.value))
        resultsArray.map((project) =>{
        var date1 = new Date(project.deadline);
        var deadline= Math.floor( (date1.getTime() -Date.now())/ (1000 * 3600 * 24) )  ;
        const info = {
            name : project.name,
            price : project.price ,
            progress : project.progress , 
            deadline : deadline,
            status : project.status
            }
        temp.push(<ProjectCard cards={cardRef} info={info} ></ProjectCard>)
            }  )           
        setCards(temp)
}

  const hundleFilter = (e) =>{
console.log(e);
    const temp = []
        const resultsArray = projects.filter(project => project.status.toLocaleLowerCase().includes(e))
        resultsArray.map((project) =>{
        var date1 = new Date(project.deadline);
        var deadline= Math.floor( (date1.getTime() -Date.now())/ (1000 * 3600 * 24) )  ;
        const info = {
            name : project.name,
            price : project.price ,
            progress : project.progress , 
            deadline : deadline,
            status : project.status
            }
        temp.push(<ProjectCard cards={cardRef} info={info} ></ProjectCard>)
            }  )           
        setCards(temp)
}


    const hundleClick = () => {
    }

    return (

        <div className='project-containar'   >

            <Sidebar el={dashRef} card={cardRef} cards={cardsRef} second={secondRef} ></Sidebar>


            <div className='container' ref={dashRef} >
                <p className='dashboard-text' > Dashboard </p>

                <div className='header-element' >
                    <div className='projects'>
                        Projects
                    </div>
                    <div className='search'>
                        <input className='search-box' placeholder='Search'  onChange={event=> {hundleType(event)} } />
                    </div>
                </div>

                <div className='body-elements' ref={bodyRef} >


                    <div className='first-section' ref={cardsRef}  >
                        <div className= {classNames('cards' , {
                                "isopen" : open,
                                 "isone" : one
                                }) } ref={cardRef}  >
                            {projectCards}
                            <div ref={addRef} onClick={hundleClick} >
                                <AddCard ></AddCard>
                            </div>
                        </div>
                    </div>


                    <div className='second-section' ref={secondRef} >

                        <div className='todo-list' >

                            <p style={{ paddingTop: 20 + 'px' }} >My to do list</p>
                            <p style={{ paddingTop: 20 + 'px' }} onClick={ ()=>  hundleFilter("not")} >Estimation</p>
                            <p style={{ paddingTop: 20 + 'px' }}  onClick={ ()=> hundleFilter("on")} >Progress</p>
                        </div>
                        <div className='contact' >
                            <div className='chat' >chat w/ PM</div>
                            <div className='call' >📞</div>
                        </div>
                    </div>







                </div>





            </div>


        </div>
    )
}

export default Project
