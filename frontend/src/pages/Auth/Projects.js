import React, { useState, useEffect, useRef } from 'react'
import ProjectCard  from '../../components/ProjectCard'
import Sidebar from '../../components/sidebar'
import AddCard from '../../components/AddCard'
import '../Auth/styles/project.css'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { addAproject, changeOne, listMyProjects } from '../../redux/actions/projectActions'



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
    const [iframe , setIframe] = useState([])
    const getProjects = useSelector((state) => state.ListMyProjectsReducer)

    const {projects} = getProjects
    const [searchTerm , setSearchTerm] = useState('')

    useEffect(() => {
      
        dispatch(listMyProjects())
  

    }, [])


    useEffect(() => {

    if(projects!=undefined){
        const temp = []
        projects.map((project) =>{
        var date1 = new Date(project.deadline);
        var date2 = new Date(project.startDate);        
        var deadline= Math.floor( (date1.getTime() -Date.now())/ (1000 * 3600 * 24) )  ;
        var period= Math.floor( ( date1.getTime()- date2.getTime())/ (1000*3600*24) )  ;  
        console.log(period);
        //console.log(Date.now()/date1.getTime());
        console.log(one);
        const info = {
            name : project.name,
            price : project.price ,
            progress : project.progress , 
            deadline : deadline ,
            period :  period , 
            status : project.status ,
            one : one , 
            }
        temp.push(<ProjectCard cards={cardRef} info={info} ></ProjectCard>)
            
            }  )
            console.log(temp);
        setCards(temp)
        
    }
    }, [getProjects])



    useEffect(() => {
        if (cardRef.current.childNodes[0] != undefined) {
            if (projectCards.length <= 1) {
            dispatch( changeOne(true) )
            setOpen(false)
            setOne(true)
            }else{
        const nodes = cardRef.current.childNodes[0]
        const bottomSection = nodes.childNodes[2]
        if (bottomSection != undefined) {
            dispatch( changeOne(false) )
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
        var date2 = new Date(project.startDate);        
        var deadline= Math.floor( (date1.getTime() -Date.now())/ (1000 * 3600 * 24) )  ;
        var period= Math.floor( ( date1.getTime()- date2.getTime())/ (1000*3600*24) )  ;  
        const info = {
            name : project.name,
            price : project.price ,
            progress : project.progress , 
            deadline : deadline,
            status : project.status ,
            period : period , 
            one : one , 
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
        console.log(files);


let data = new FormData() 


data.append("name" , "TestProject123252") ; 
data.append("price" ,12 ) ; 
files.map((file) =>{data.append("file",file)})
data.append("progress",41) ; 
data.append("deadline","10/21/2022") ; 
data.append("status","not yet") ; 


    dispatch(addAproject(data))
    }


   const hundleClick1 = () => {

 const data = getProjects.projects[3].files[0].data.data

console.log(data);
const base64String =btoa(new Uint8Array(data).reduce(function (data, byte) {

return data + String.fromCharCode(byte);
}, ''));

setBase64(base64String)

let temp = []



temp.push( <object data={"data:application/pdf;base64,"+base64String}></object>)

setIframe(temp)

    }


function arrayBufferToBase64( buffer ) {
	var binary = '';
	var bytes = new Uint8Array( buffer );
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode( bytes[ i ] );
        console.log(binary);
	}
	return window.btoa( binary );
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
<button onClick={hundleClick1} > fhfffg </button> 
                            <p style={{ paddingTop: 20 + 'px' }} >My to do list</p>
                            <p style={{ paddingTop: 20 + 'px' }} onClick={ ()=>  hundleFilter("not")} >Estimation</p>
                            <p style={{ paddingTop: 20 + 'px' }}  onClick={ ()=> hundleFilter("on")} >Progress</p>
                        </div>
                        <div className='contact' >
                            <div className='chat' >chat w/ PM</div>
                            <div className='call' >📞</div>
                        </div>
                    </div>





          {iframe}

                </div>





            </div>

       <input type="file" name='files' multiple="" ref={fileRef}   onChange={(e)=>{  const temp = files
                                                                                     temp.push(e.target.files[0])
                                                                                    setFiles(temp)
                                                                                            }} />
   
           
        </div>
    )
}

export default Project
