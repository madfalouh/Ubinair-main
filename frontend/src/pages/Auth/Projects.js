import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from '../../components/ProjectCard'
import Sidebar from '../../components/sidebar'
import AddCard from '../../components/AddCard'


const project = () => {
  

    return (
        <div  className='project-containar' >
  <Sidebar></Sidebar>
 <p  className='dashboard-text'> Dashboard </p>
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

 <div className='body-elements flex-child' >


<div className='first-section '>
<div className='cards'  >
<ProjectCard></ProjectCard>
<ProjectCard></ProjectCard>
</div>


</div>


<div className='second-section flex-child'>

<div  className='todo-list' >My to do list</div>

</div>
</div>








   </div>
    )
}

export default project
