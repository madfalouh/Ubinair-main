import classNames from 'classnames'
import { useEffect, useRef, useState } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import cirle from '../img/circle.png'


export default function ProjectCard({cards,info , setIframe }) {

 const [open , setOpen] = useState(false)
 const progressbar = info.progress/100 
 const deadLineRef = useRef()
 const progressRef = useRef()
const progressCRef = useRef()
 const projectOne = useSelector((state) => state.ProjetcCreateReducerOne)
 useEffect(() => {
    console.log(projectOne);
    const deadline =  (info.period- info.deadline) /info.period *100
    console.log(info.period);
  
    deadLineRef.current.style.background="linear-gradient(90deg, rgba(124, 37, 73, 0.87) 1.56%, rgba(99, 33, 63, 0.87)"+ (deadline-20)+ "%,rgba(50, 21, 72, 0.87)"+ deadline+"%, rgba(55, 22, 65, 0.87) 100%)"
    progressRef.current.style.width = "calc(242px*"+progressbar+")"
}, [])


    useEffect(() => {
    if(open) {
    console.log(progressRef.current.offsetWidth);
       progressRef.current.style.width = "calc(447px*"+progressbar+")"
       progressCRef.current.style.width = "calc(447px*"+1+")"
        progressCRef.current.style.marginLeft = "55%"
    }else{
   progressRef.current.style.width = "calc(242px*"+progressbar+")"
        progressCRef.current.style.width = "calc(242px*"+1+")"
        progressCRef.current.style.marginLeft = "70%"
}
    }, [open])


    useEffect(() => {
     
   
        console.log(projectOne.stateOne); 
        if(projectOne.stateOne){
      console.log(progressRef.current.offsetWidth);
       progressRef.current.style.width = "calc(675px*"+progressbar+")"
       progressCRef.current.style.width = "calc(675px*"+1+")"
        progressCRef.current.style.marginLeft = "35%"
        }else{
        progressRef.current.style.width = "calc(242px*"+progressbar+")"
        progressCRef.current.style.width = "calc(242px*"+1+")"
        progressCRef.current.style.marginLeft = "70%"
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

 const hundleClick1 = (e) => {

const index =  e.currentTarget.id;

 const data = info.files[index].data.data

console.log(data);
const base64String =btoa(new Uint8Array(data).reduce(function (data, byte) {

return data + String.fromCharCode(byte);
}, ''));



let temp = []




temp.push( <object data={"data:application/pdf;base64,"+base64String}  style={{width:100+"%" , height:1000+"px"}} ></object>)

setIframe(temp)


const popupOpen = info.popupOpen.current
popupOpen.classList.add("open");

    }


const hundleclose = () =>{

cards.current.classList.add("isopen")
cards.current.classList.remove("isone")
console.log(cards.current.classList);
setOpen(false)
//1 2 
console.log(cards.current.childNodes);
let p = 0
for (var i = 0; i < cards.current.childNodes.length; i++) {
        console.log(cards.current.childNodes[i].className);
    if (cards.current.childNodes[i].className.includes("collapsed") ) {
        console.log(i);
      p++
      
    }        
}


console.log(p);




} 

return (

	<div className={ classNames("project-card" , {
                    "collapsed" :open
                })} >

    
<p  className="name close-name" onClick={hundleclose} > Close <span  className="branding" ></span>  </p> 

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

<div  className="progress-bar-container" ref={progressCRef}  >
    
<div  className="progress-bar" ref={progressRef}  >
{info.progress }%
</div>
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
<ul  className='file-liste' >
<li onClick={ e => {hundleClick1(e)}   } id="0" >Charte graphic</li>
<li  onClick={ e => {hundleClick1(e)}  }  id="1">Cahier de charge </li>
<li id="2">Contenu du site</li>
<li id="3">Images</li>
</ul>


</div>




</div>
    )
}
