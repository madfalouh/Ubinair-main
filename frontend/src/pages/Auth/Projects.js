import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from '../../components/ProjectCard'
import Sidebar from '../../components/sidebar'
import AddCard from '../../components/AddCard'



const Project = () => {
const cardRef = useRef()
const addRef = useRef()
const bodyRef = useRef()
const dashRef = useRef()
const proRef = useRef()

const [projectCards , setCards] = useState([])



useEffect (()=> {


const temp = []
temp.push(<ProjectCard></ProjectCard>)
setCards(temp)

}, [] )


useEffect (()=> {






console.log(projectCards.length);
if(cardRef.current.childNodes[0] !=undefined){

if(projectCards.length <=1 ) {
console.log(addRef.current);

addRef.current.style.width ='529px'
console.log("1st");
const nodes = cardRef.current.childNodes[0]




nodes.style.width=1300 +'px'

const bottomSection = nodes.childNodes[2]
if(bottomSection!=undefined) {
bottomSection.style.marginTop = -1 +'px'

const details = (bottomSection.childNodes[0]).childNodes[1]

const progress = (bottomSection.childNodes[1]).childNodes[0]

const deadline = (bottomSection.childNodes[1]).childNodes[1]

progress.style.marginTop =50 +'px'
details.style.marginTop =-70 +'px'
progress.style.width =500 +'px'
details.style.marginLeft =-100 +'px'
deadline.style.marginLeft =150 +'px'
deadline.style.marginTop =-120 +'px'

cardRef.current.style.gridTemplateColumns = 1 +'fr' 

} 



}

}

}, [projectCards] )


const hundleClick = ()=> {
cardRef.current.style.width =629 +'px'
console.log("click");
const temp = [...projectCards]
temp.push(<ProjectCard></ProjectCard>)
setCards(temp)


const nodes = cardRef.current.childNodes[0]





nodes.style.width=629 +'px'
const bottomSection = nodes.childNodes[2]
if(bottomSection!=undefined) {
bottomSection.style.marginTop = 40 +'px'
const details = (bottomSection.childNodes[0]).childNodes[1]
const progress = (bottomSection.childNodes[1]).childNodes[0]
const deadline = (bottomSection.childNodes[1]).childNodes[1]
//details.style.marginTop =0 +'px'
progress.style.width =242 +'px'
details.style.marginLeft =40 +'px'
deadline.style.marginLeft =30 +'px'
deadline.style.marginTop =-120 +'px'

cardRef.current.style.gridTemplateColumns = 1 +'fr'  + ' ' +1 + 'fr'



}



}

    return (

        <div  className='project-containar'   >
 
 <Sidebar el={dashRef} ></Sidebar>

 
 <div className='container' ref={dashRef} >
 <p  className='dashboard-text' > Dashboard </p>
 <div className='header-element' >
 <div class="float-child">
<div className='projects'>
Projects
</div>
</div>

<div class="float-child">
<div className='search'>
<input className='search-box'  placeholder='Search' />
</div>
</div>
</div>

 <div className='body-elements'  ref={bodyRef} >


<div className='first-section flex-child' >
<div className='cards' ref={cardRef} >

{projectCards}

<div ref={addRef} onClick={hundleClick} >
<AddCard ></AddCard>
</div>

 
</div>


</div>


<div className='second-section flex-child'>

<div  className='todo-list' >My to do list</div>

</div>
</div>





</div>


   </div>
    )
}

export default Project
