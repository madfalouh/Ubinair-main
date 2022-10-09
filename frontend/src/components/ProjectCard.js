import classNames from 'classnames'
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import cirle from '../img/circle.png'

import pdf from '../img/pdf.png'
import { UpdateProject } from '../redux/actions/projectActions'


export default function ProjectCard({ cards, info, setIframe,setType , type  }) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [update, setUpdate] = useState(false)
    const [activate, setAtivate] = useState(false)
    const [cancel, setCancel] = useState(false)
    const [save, setSave] = useState(false)
    const [typ, setTyp] = useState("")
    const progressbar = info.progress / 100
    const deadLineRef = useRef()
    const progressRef = useRef() 
    const progressCRef = useRef()
    const projectOne = useSelector((state) => state.ProjetcCreateReducerOne)
    useEffect(() => {
        console.log(projectOne);
        const deadline = (info.period - info.deadline) / info.period * 100
        console.log(info.period);

        deadLineRef.current.style.background = "linear-gradient(90deg, rgba(124, 37, 73, 0.87) 1.56%, rgba(99, 33, 63, 0.87)" + (deadline - 20) + "%,rgba(50, 21, 72, 0.87)" + deadline + "%, rgba(55, 22, 65, 0.87) 100%)"
        progressRef.current.style.width = "calc(242px*" + progressbar + ")"
    }, [])


    useEffect(() => {
        if (open) {
            progressRef.current.style.width = "calc(447px*" + progressbar + ")"
            console.log("3ch");
            const children = cards.current.childNodes
            children.forEach(function (item) {
                if (!item.className.includes("collapsed")) {
                    const bottomSection = item.childNodes[3]
                    if (bottomSection != undefined) {
                        const bottomright = bottomSection.childNodes[1]
                        const progressC = bottomright.childNodes[0]
                        const progress = progressC.childNodes[1]
                        const span = progressC.childNodes[0]
                        span.style.marginTop = "1.3%"
                        const text = span.innerText
                        var ret = text.replace('%', '');
                        ret = ret / 100
                        console.log(ret);
                        progress.style.width = "calc(700px*" + ret + ")"
                    }
                }
            });
        } else {
            console.log(info.progress);
            progressRef.current.style.width = "calc(242px*" + progressbar + ")"
            const children = cards.current.childNodes
            children.forEach(function (item) {
                if (!item.className.includes("collapsed")) {
                    const bottomSection = item.childNodes[3]
                    if (bottomSection != undefined) {
                        const bottomright = bottomSection.childNodes[1]
                        const progressC = bottomright.childNodes[0]
                        const progress = progressC.childNodes[1]
                        const span = progressC.childNodes[0]
                        const text = span.innerText
                        var ret = text.replace('%', '');
                        span.style.marginTop = "3.2%"
                        ret = ret / 100
                        console.log(ret);
                        progress.style.width = "calc(242px*" + ret + ")"
                    }
                }
            });
        }
    }, [open])




    useEffect(() =>{
        hundleclose()

    }, [type])


    useEffect(() => {


    }, [cards.current.childNodes])



    const hundledetails = () => {
        cards.current.classList.remove("isopen")
        //cards.current.classList.add("collapsed")
        cards.current.classList.add("isone")
        console.log(cards.current.classList);
        setOpen(true)
        setUpdate(true)
    }

    const hundleClick1 = (e) => {

        const index = e.currentTarget.id;

        const data = info.files[index].data.data

        console.log(data);
        const base64String = btoa(new Uint8Array(data).reduce(function (data, byte) {

            return data + String.fromCharCode(byte);
        }, ''));



        let temp = []




        temp.push(<object data={"data:application/pdf;base64," + base64String} style={{ width: 100 + "%", height: 1000 + "px" }} ></object>)

        setIframe(temp)


        const popupOpen = info.popupOpen.current
        popupOpen.classList.add("open");

    }


    const hundleclose = () => {
        setAtivate(false)
        setUpdate(false)
        setCancel(false)
        setSave(false)
        setOpen(false)
        console.log(cards.current.childNodes);
        let p = 0
        for (var i = 0; i < cards.current.childNodes.length; i++) {
            console.log(cards.current.childNodes[i].className);
            if (cards.current.childNodes[i].className.includes("collapsed")) {
                console.log(i);
                p++

            }
        }
        if (p > 1) {


        } else {

            cards.current.classList.add("isopen")
            cards.current.classList.remove("isone")

        }





    }



    const hundleupdate = () => {
        setAtivate(true)
        setUpdate(false)

    }

    const hundlesave = () => {
        setAtivate(false)
        setUpdate(true)
        info.name=typ
        console.log(info );
        dispatch(UpdateProject(info))
        

    }


    const hundlecancel = () => {
        setAtivate(false)
        setUpdate(true)
    }




    return (

        <div className={classNames("project-card", {
            "collapsed": open
        })} >


            <p className="name close-name" onClick={hundleclose} > <a class="close" />  </p>
            <div className="project-name" > <input name="ctl00$footContent$updateText" type="text" onChange={ (e)=>{setTyp(e.target.value)} }  className={classNames("input-name", {
                "collapsed": activate
            })} id="footContent_updateText"></input> <p id='name'  className={classNames("projectName", {
                "collapsed": activate
            })} >  {info.name}  </p>   <button className={ classNames( "btn accept  activate-input" , {"collapsed": update}) }  onClick={hundleupdate} >C</button> <button className={ classNames( "btn accept save-input" ,{"collapsed": activate} ) }  id="save" onClick={hundlesave} >X</button> <button className= {classNames( "btn cancel delete-input" , {"collapsed": activate} )   }  onClick={hundlecancel} >Cj</button> </div>

            <div className="status-section">
                <p className="name" >Status   <span className="not-yet"   > : {info.status}</span>   </p>

                <p className="name" >Service <span className="branding" >: Branding</span>  </p>
            </div>

            <div className="bottom-section">

                <div className=" float-child bottom-left">
                    <img src={cirle} className="circles" />

                    <p className="details" onClick={hundledetails} > Plus de details </p>
                </div>



                <div className=" float-child bottom-right">
                    <div className="progress-bar-container" ref={progressCRef}  >
                        <span data-value="60" style={{ width: 60 + "%" }}>{info.progress}%</span>
                        <div className="progress-bar" ref={progressRef}></div>
                    </div>
                    <div className="deadline" ref={deadLineRef} > Deadline en {info.deadline} jours </div>
                </div>




            </div>

            <div className="consigne"    >
                
               
                <div className="first-consigne"    >
        <p className="consigne-text" > Consigne</p>
 <textarea id="story" 
          rows="5" cols="33" placeholder="Describe yourself here..." >tapez ici...</textarea>
           <button className='save-consigne' >Enregistrer</button>      

</div>
                <div className="second-consigne"    >
                    <div className="red-line"    ></div>
                     <div className='file-liste-consigne' >
                    <ul className='file-liste' >
                        <li onClick={e => { hundleClick1(e) }} id="0" ><div className='listimge' >  <div className='listimge-contanair' ><p>Charte graphic</p><img src={pdf} ></img>  </div> <button class="btn cancel"  id='btn'  ><img src={pdf} width={15} ></img> </button><button class="btn accept" id='btn'><img src={pdf} width={15} ></img></button><button class="btn update" id='btn'><img src={pdf} width={15} ></img></button> </div> </li>
                        <li onClick={e => { hundleClick1(e) }} id="1"><div className='listimge'  ><div className='listimge-contanair' ><p>Cahier de charge</p><img src={pdf} ></img></div><button class="btn cancel" id='btn'><img src={pdf} width={15} ></img></button><button class="btn accept" id='btn'><img src={pdf} width={15} ></img></button><button class="btn update " id='btn'><img src={pdf} width={15} ></img></button> </div> </li>
                        <li onClick={e => { hundleClick1(e) }} id="2"><div className='listimge'  ><div className='listimge-contanair' ><p>Contenu du site</p><img src={pdf} ></img></div><button class="btn cancel" id='btn'><img src={pdf} width={15} ></img></button><button class="btn accept" id='btn'><img src={pdf} width={15} ></img></button><button class="btn update" id='btn'><img src={pdf} width={15} ></img></button> </div></li>
                        <li onClick={e => { hundleClick1(e) }} id="3"><div className='listimge' ><div className='listimge-contanair' ><p>Images</p><img src={pdf} ></img></div><button class="btn cancel" id='btn'><img src={pdf} width={15} ></img></button><button class="btn accept" id='btn'><img src={pdf} width={15} ></img></button><button class="btn update" id='btn'><img src={pdf} width={15} ></img></button> </div></li>
                    </ul>

                </div>
                </div>

               
            </div>




        </div>
    )
}
