import React, { useState, useEffect, useRef } from 'react'
import ProjectCard  from '../../components/ProjectCard'
import Sidebar from '../../components/sidebar'
import AddCard from '../../components/AddCard'
import '../Auth/styles/project.css'
import classNames from 'classnames'


const Project = () => {
    const cardRef = useRef()
    const cardsRef = useRef()
    const addRef = useRef()
    const bodyRef = useRef()
    const dashRef = useRef()
    const secondRef = useRef()
    const i = useRef()
    const [projectCards, setCards] = useState([])
    const [open, setOpen] = useState(false)
    const [one, setOne] = useState(false)


    useEffect(() => {


        const temp = []
        temp.push(<ProjectCard cards={cardRef} ></ProjectCard>)
        setCards(temp)

    }, [])


    useEffect(() => {
        if (cardRef.current.childNodes[0] != undefined) {
            if (projectCards.length <= 1) {
             setOne(true)
            }
        }
    }, [projectCards])

  

    const hundleClick = () => {
        console.log("click");
        const temp = [...projectCards]
        temp.push(<ProjectCard cards={cardRef}></ProjectCard>)
        setCards(temp)
        const nodes = cardRef.current.childNodes[0]
        const bottomSection = nodes.childNodes[2]
        if (bottomSection != undefined) {
            setOpen(true)
            setOne(false)
        }
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
                        <input className='search-box' placeholder='Search' />
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
