import classNames from 'classnames'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import cirle from '../img/circle.png'


export default function ProjectCard({cards,info}) {

 const [open , setOpen] = useState(false)
 let deadline

const hundledetails = () => {
cards.current.classList.remove("isopen")
cards.current.classList.add("collapsed")
cards.current.classList.add("isone")
console.log(cards.current.classList);
setOpen(true)
}





return (

	<div className={ classNames("project-card" , {
                    "collapsed" :open
                })} >
	<p className="project-name" >  {info.name} </p  >
    <div className="status-section">
   <p  className="name" >Status : <span  className="not-yet"  >{info.status}</span>   </p>  
    
<p  className="name" >Service :<span  className="branding" >Branding</span>  </p> 
        </div>

<div className="bottom-section">

<div className=" float-child bottom-left">
<img  src={cirle}  className="circles" />

<p className="details"    onClick={hundledetails} > More details </p>
</div>




<div className=" float-child bottom-right">

<div  className="progress-bar"  >
{info.progress }%
</div>
<p className="deadline" > Deadline in {info.deadline} days </p>
</div>




</div>

<div  className="consigne"    >
 <p className="consigne-text" > Consigne</p> 
</div>


</div>
    )
}
