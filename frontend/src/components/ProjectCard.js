import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import cirle from '../img/circle.png'


export default function ProjectCard() {

const navigat = useNavigate()


const hundledetails = () => {
var element = document.getElementById("details");
element.classList.toggle("collapsed");

console.log("lol");
}


return (

	<div className="project-card" id="details" >
	<p className="project-name" > Name of the Project  </p  >
    <div className="status-section">
   <p  className="name" >Status : <span  className="not-yet"  >not yet</span>   </p>  
    
<p  className="name" >Service :<span  className="branding" >Branding</span>  </p> 
        </div>

<div className="bottom-section">

<div className=" float-child bottom-left">
<img  src={cirle}  className="circles" />

<p className="details"    onClick={hundledetails} > More details </p>
</div>




<div className=" float-child bottom-right">

<div  className="progress-bar"  >
100%
</div>
<p className="deadline" > Deadline in 9 days </p>
</div>




</div>

<div  className="consigne"    >
 <p className="consigne-text" > Consigne</p> 
</div>


</div>
    )
}
