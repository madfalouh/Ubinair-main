import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from '../../components/ProjectCard'
import Sidebar from '../../components/sidebar'
import AddCard from '../../components/AddCard'



const Project = () => {
const cardRef = useRef()
const cardsRef = useRef()
const addRef = useRef()
const bodyRef = useRef()
const dashRef = useRef()
const secondRef = useRef()
const i = useRef()

const [projectCards , setCards] = useState([])



useEffect (()=> {


const temp = []
temp.push(<ProjectCard></ProjectCard>)
setCards(temp)

}, [] )


useEffect (()=> {
if(cardRef.current.childNodes[0] !=undefined){
if(projectCards.length <=1 ) {
console.log(addRef.current);
addRef.current.style.width ='600px'
const add = addRef.current.childNodes[0]
const nodes = cardRef.current.childNodes[0]
const bottomSection = nodes.childNodes[2]
if(bottomSection!=undefined) {
placeBottomSection(bottomSection)
} 
}
}
}, [projectCards] )


const placeBottomSection = (bottomSection) => {
const details = (bottomSection.childNodes[0]).childNodes[1]
const progress = (bottomSection.childNodes[1]).childNodes[0]
const deadline = (bottomSection.childNodes[1]).childNodes[1]
bottomSection.style.marginTop="2px"
progress.style.marginTop =50 +'px'
details.style.marginTop =-70 +'px'
progress.style.width ="220%"
deadline.style.width ="220%"
details.style.marginLeft =-100 +'px'
deadline.style.marginLeft =0 +'px'
progress.style.marginLeft =0 +'px'
deadline.style.marginTop =-120 +'px'


}


const hundleClick = ()=> {
cardRef.current.style.width =600 +'px'
console.log("click");
const temp = [...projectCards]
temp.push(<ProjectCard></ProjectCard>)
setCards(temp)

const nodes = cardRef.current.childNodes[0]
nodes.style.width=600 +'px'
const bottomSection = nodes.childNodes[2]
if(bottomSection!=undefined) {
bottomSection.style.marginTop = 45 +'px'
const details = (bottomSection.childNodes[0]).childNodes[1]
const progress = (bottomSection.childNodes[1]).childNodes[0]
const deadline = (bottomSection.childNodes[1]).childNodes[1]
//details.style.marginTop =0 +'px'
progress.style.width =242 +'px'
deadline.style.width =242 +'px'
details.style.marginLeft =40 +'px'
deadline.style.marginLeft =130 +'px'
progress.style.marginLeft =130 +'px'

cardRef.current.style.gridTemplateColumns = 600 +'px'  + ' ' +600 + 'px'



}



}

    return (

        <div  className='project-containar'   >
 
 <Sidebar el={dashRef}  card={cardRef}  cards={cardsRef}  second={secondRef} ></Sidebar>

 
 <div className='container' ref={dashRef} >
 <p  className='dashboard-text' > Dashboard </p>

<div className='header-element' >
<div className='projects'>
Projects
</div>
<div className='search'>
<input className='search-box'  placeholder='Search' />
</div>
</div>

<div className='body-elements'  ref={bodyRef} >


<div className='first-section' ref={cardsRef}  >
<div className='cards' ref={cardRef} >
{projectCards}
<div ref={addRef} onClick={hundleClick} >
<AddCard ></AddCard>
</div>
</div>
</div>


<div className='second-section' ref={secondRef} >

<div  className='todo-list' >

 <p style={{paddingTop :20+'px'}} >My to do list</p>  
</div>
<div  className='contact' >
<div  className='chat' >chat w/ PM</div>
<div  className='call' >📞</div>
</div>
</div>







</div>





</div>


   </div>
    )
}

export default Project
