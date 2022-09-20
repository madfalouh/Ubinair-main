import classNames from 'classnames'
import { useEffect, useRef, useState } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import cirle from '../img/circle.png'


export default function ProjectCard({cards,info}) {

 const [open , setOpen] = useState(false)
 const progressbar = info.progress/100 
 const deadLineRef = useRef()
 const progressRef = useRef()
 const projectOne = useSelector((state) => state.ProjetcCreateReducerOne)
 useEffect(() => {
    console.log(projectOne);
    const deadline =  (info.period- info.deadline) /info.period *100
    deadLineRef.current.style.background="linear-gradient(90deg, rgba(124, 37, 73, 0.87) 1.56%, rgba(99, 33, 63, 0.87)"+ (deadline-20)+ "%,rgba(50, 21, 72, 0.87)"+ deadline+"%, rgba(55, 22, 65, 0.87) 100%)"
    progressRef.current.style.width = "calc(242px*"+progressbar+")"
}, [])


    useEffect(() => {
    if(open) {

    }
    }, [open])


    useEffect(() => {
     
   
        console.log(projectOne.stateOne); 
        if(projectOne.stateOne){
      console.log(progressRef.current.offsetWidth);
       progressRef.current.style.width = "calc(675px*"+progressbar+")"
        }else{
        progressRef.current.style.width = "calc(242px*"+progressbar+")"
        }
    }, [projectOne])



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

<div  className="progress-bar" ref={progressRef}  >
{info.progress }%
</div>
<p className="deadline"  ref={deadLineRef} > Deadline in {info.deadline} days </p>
</div>




</div>

<div  className="consigne"    >
 <p className="consigne-text" > Consigne</p> 

<div  className="first-consigne"    ></div>
<div  className="second-consigne"    >  

<div  className="red-line"    ></div>  

</div>
<ul>
<li>Charte graphic</li>
<li>Cahier de charge </li>
<li>Contenu du site</li>
<li>Images</li>
</ul>


</div>


</div>
    )
}
