import classNames from 'classnames'
import { useEffect, useRef, useState } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import cirle from '../img/circle.png'
import listimage from '../img/listimage.png'

export default function ProjectCard({ cards, info, setIframe }) {

    const [open, setOpen] = useState(false)
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















    useEffect(() => {

        console.log("change");

    }, [cards.current.childNodes])



    const hundledetails = () => {
        cards.current.classList.remove("isopen")
        //cards.current.classList.add("collapsed")
        cards.current.classList.add("isone")
        console.log(cards.current.classList);
        setOpen(true)
        var btn1 = document.querySelector(".accept")
        btn1.style.display="block"
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
        var name = document.getElementById("name");
        var footContent = document.getElementById("footContent_updateText");
        var btn1 = document.querySelector(".accept")
        var btn2 = document.querySelector(".cancel")
        var btn3 = document.getElementById("save")
        name.style.display="block"
        btn1.style.display="none"
        btn2.style.display="none"
        btn3.style.display="none"
        footContent.style.display="none"
        console.log(cards.current.classList);
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



const hundleupdate = ()=> {
var footContent = document.getElementById("footContent_updateText");
var name = document.getElementById("name");
footContent.style.display = "inline-block";
footContent.value=name.innerText
name.style.display = "none";
var btn1 = document.querySelector(".accept")
var btn2 = document.querySelector(".cancel")
var btn3 = document.getElementById("save")
btn1.style.display="none"
btn2.style.display="block"
btn3.style.display="block"
        }

const hundlesave = ()=> {
var footContent = document.getElementById("footContent_updateText");
var name = document.getElementById("name");

if(footContent.value==="") {
}else {
footContent.style.display = "none";
name.style.display = "inline-block";
name.innerText=footContent.value
var btn1 = document.querySelector(".accept")
var btn2 = document.querySelector(".cancel")
var btn3 = document.getElementById("save")
btn1.style.display="block"
btn2.style.display="none"
btn3.style.display="none"
}


        }


const hundlecancel = ()=> {
var footContent = document.getElementById("footContent_updateText");
var name = document.getElementById("name");
footContent.style.display = "none";
footContent.value=name.innerText
name.style.display = "inline-block";
var btn1 = document.querySelector(".accept")
var btn2 = document.querySelector(".cancel")
var btn3 = document.getElementById("save")
btn1.style.display="block"
btn2.style.display="none"
btn3.style.display="none"
        }




    return (

        <div className={classNames("project-card", {
            "collapsed": open
        })} >


            <p className="name close-name" onClick={hundleclose} > <a class="close" />  </p>
            <div className="project-name" > <input name="ctl00$footContent$updateText" type="text" id="footContent_updateText" style={{display: "none"}}></input> <p id='name' >  {info.name}  </p>   <button class="btn accept update-name" style={{display: "none"}} onClick={hundleupdate} >C</button> <button class="btn accept update-name" style={{display: "none"}} id="save" onClick={hundlesave} >X</button> <button class="btn cancel " onClick={hundlecancel}  style={{display: "none"}}>C</button> </div>
               
            <div className="status-section">
                <p className="name" >Status : <span className="not-yet"  >{info.status}</span>   </p>
      
                <p className="name" >Service :<span className="branding" >Branding</span>  </p>
            </div>

            <div className="bottom-section">

                <div className=" float-child bottom-left">
                    <img src={cirle} className="circles" />

                    <p className="details" onClick={hundledetails} > More details </p>
                </div>



                <div className=" float-child bottom-right">
                    <div className="progress-bar-container" ref={progressCRef}  >
                        <span data-value="60" style={{ width: 60 + "%" }}>{info.progress}%</span>
                        <div className="progress-bar" ref={progressRef}></div>
                    </div>
                    <div className="deadline" ref={deadLineRef} > Deadline in {info.deadline} days </div>
                </div>




            </div>

            <div className="consigne"    >
                <p className="consigne-text" > Consigne</p>

                <div className="first-consigne"    >




                </div>
                <div className="second-consigne"    >

                    <div className="red-line"    ></div>


                </div>

                <div className='file-liste-consigne' >
                    <ul className='file-liste' >
                        <li onClick={e => { hundleClick1(e) }} id="0" > <div className='listimge' ><p>Charte graphic</p>  <button class="btn cancel">C</button><button class="btn accept">C</button><button class="btn update">C</button> </div> </li>
                        <li onClick={e => { hundleClick1(e) }} id="1"><div className='listimge'  ><p>Cahier de charge</p><button class="btn cancel">C</button><button class="btn accept">C</button><button class="btn update">C</button> </div> </li>
                        <li onClick={e => { hundleClick1(e) }} id="2"><div className='listimge'  ><p>Contenu du site</p><button class="btn cancel">C</button><button class="btn accept">C</button><button class="btn update">C</button> </div></li>
                        <li onClick={e => { hundleClick1(e) }} id="3"><div className='listimge' ><p>Images</p><button class="btn cancel">C</button><button class="btn accept">C</button><button class="btn update">C</button> </div></li>
                    </ul>

                </div>
            </div>




        </div>
    )
}
