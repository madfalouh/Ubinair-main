import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { dispatchLogin, dispatchGetUser, dispatchRegister } from '../../redux/actions/authAction'
import { isEmpty, isEmail } from '../../utils/validation/Validation'
import { useDispatch, useSelector } from 'react-redux'
import ReactDOM from 'react-dom'
import { dispatchToken } from '../../redux/actions/tokenAction'
import google from '../../img/google.png'
import '../Auth/styles/login.css'
import classNames from 'classnames'

const initialState = {
    email: '',
    password: '',
    fullName : '', 
    domain : '' ,
    phoneNumber : '' ,
    type:'user' , 
    err: '',
    success: '',
}

const Login = () => {
    const i = useRef(0)
    const j = useRef(0)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const spanref = useRef()
    const firstLayer = useRef()
    const secondLayerSignUp = useRef()
     const secondLayerSignIn = useRef()
    const registerLayer = useRef()
    const buttonRef = useRef()
    const step1Ref = useRef()
    const step2Ref = useRef()
    const step3Ref = useRef()
    const nextButtonRef = useRef()
    const backRef = useRef()
    const one = useRef()
    const two = useRef()
    const three = useRef()
    const [creds, setCreds] = useState(initialState)
    const { email, password, phoneNumber , domain , fullName , type ,err, success } = creds
    const [open , setOpen] = useState(false)
    const auth = useSelector((state) => state.auth)
    const token = useSelector((state) => state.token)

    const { error, userInfo, isLogged } = auth

    const handleChange = (e) => {
        //place of do that -> onChange={(e) => setEmail(e.target.value) for each field (input) we do that
        setCreds({
            ...creds,
            [e.target.name]: e.target.value,
            err: '',
            success: '',
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(creds);
        if (isEmpty(email) | isEmpty(password))
            return setCreds({
                ...creds,
                err: 'Please fill in all fields',
                success: '',
            })

        if (!isEmail(email))
            return setCreds({
                ...creds,
                err: 'Invalid email',
                success: '',
            })

        dispatch(dispatchLogin(creds))
             console.log("jkgsdfjkfdg");
      console.log(token);
    }

    const handleRegister = (e) => {
        e.preventDefault()
    if(nextButtonRef.current.textContent === "Confirm"){
        
        dispatch(dispatchRegister(creds))
        handleMoveSignUp()
    }

        

    }




  useEffect(() => {
        if(userInfo){
            console.log("jidfjindzfgiunjrejfginrethretgrttttttttttt");
            console.log(userInfo);
            sessionStorage.setItem("token",""+userInfo.data)
            const token = sessionStorage.getItem("token")
            console.log(token);
            //navigate("/chat")
            }
        // render()
    }, [userInfo])



    useEffect(() => {
        one.current.style.fontWeight = "bold"
        const render = () => {
            const spans = []
            for (var i = 0; i < 25; i++) {
                spans.push(<span></span>)
            }
            ReactDOM.render(spans, spanref.current);
        }
        // render()
    }, [])


    const handleMoveSignUp = (e) => {
        e.preventDefault()
        if(i.current%2==0){
        setOpen(true)
            registerLayer.current.style.display="flex"
            firstLayer.current.style.display="none"
            secondLayerSignUp.current.style.display="flex"
            secondLayerSignIn.current.style.display="none"
        }else{
            secondLayerSignUp.current.style.display="none"
            secondLayerSignIn.current.style.display="flex"
            registerLayer.current.style.display="none"
            firstLayer.current.style.display="flex"    
        }
i.current++
    }


    const NextItem = (e) => {
        e.preventDefault()
        j.current++;
        if (j.current == 1) {
            backRef.current.style.display = "flex"
            two.current.style.fontWeight = "bold"
            one.current.style.fontWeight = "200"
            step1Ref.current.style.display = "none"
            step2Ref.current.style.display = "block"
        } else if (j.current == 2) {
            three.current.style.fontWeight = "bold"
            two.current.style.fontWeight = "200"
            step2Ref.current.style.display = "none"
            step3Ref.current.style.display = "block"
            nextButtonRef.current.textContent = "Confirm"
        }
    }
    const handleBack = () => {
        j.current--;
        console.log(j.current);
        if (j.current == 0) {
            backRef.current.style.display = "none"
            two.current.style.fontWeight = "200"
            one.current.style.fontWeight = "bold"
            step2Ref.current.style.display = "none"
            step1Ref.current.style.display = "block"
        } else if (j.current == 1) {
            two.current.style.fontWeight = "bold"
            three.current.style.fontWeight = "200"
            step3Ref.current.style.display = "none"
            step2Ref.current.style.display = "block"
            nextButtonRef.current.textContent = "Next"
        }
    }

    return (
        <div className='container' >
            <div class="all">
                <div class="logo">

                </div>

              

                <div className={classNames("login-form" , {
                            'move-login' : open
                            })} ref={firstLayer}  >

                    <p class="title"> Hello ! </p>
                    <label for="email" class="email" id='label' >Email</label>
                    <input type="text" className='input-field' name="email"  onChange={(e)=>{handleChange(e)}} />
                    <label for="Password" class="password" id='label'>Password</label>
                    <input type="password" className='input-field' name="password"  onChange={(e)=>{handleChange(e)}} />
                    <p className='forgot-password'>forgot password ?</p>
                    <br />
                    <button class="sign-in" id="confirm" onClick={handleSubmit} >Confirm</button>
                    <br /> <br />
                    <div class="line-container" id='orline' >
                        <div class="line"></div>
                        <div class="or">or</div>
                        <div class="line"></div>
                    </div>

                    <br ></br>
                    <p class="connect-with">Connect with</p>
                    <br ></br>
                    <img src={google} style={{ cursor: 'pointer' }} />
                </div>
                <div className={classNames("login-form" , {
                            'return-login' :open
                        })} ref={registerLayer} id="register" >
                     <p class="back" ref={backRef} onClick={handleBack} > ⬅ Back </p>
                    <p class="title"> Welcome ! </p>
                        
                    <div class="line-container" id="numbers">

                        <div class="one" ref={one} >1</div>
                        <div class="two" ref={two} >2</div>
                        <div class="three" ref={three} >3</div>

                    </div>

                    <div className='step1' ref={step1Ref} >
                        <label for="email" class="email" >Full Name</label>
                        <input type="text" className='input-field' name="fullName"  onChange={(e)=>{handleChange(e)}} />
                        <label for="Password" class="password">Email</label>
                        <input type="text" className='input-field' name="email"  onChange={(e)=>{handleChange(e)}} />
                    </div>
                    <div className='step2' ref={step2Ref}  >
                        <label for="email" class="email">Phone Number</label>
                        <input type="text" className='input-field'  name="phoneNumber"  onChange={(e)=>{handleChange(e)}} />
                        <label for="Password" class="password">Domaine</label>
                        <input type="text" className='input-field' name="domain"  onChange={(e)=>{handleChange(e)}} />
                    </div>
                    <div className='step3' ref={step3Ref}  >
                        <label for="email" class="email">Password</label>
                        <input type="password" className='input-field' name="password"  onChange={(e)=>{handleChange(e)}} />
                        <label for="Password" class="password">Re-enter Password</label>
                        <input type="password" className='input-field' />
                    </div>
                    <br />
                    <br />
                    <button class="sign-in" id="confirm" onClick={ (e) => { handleRegister(e) ; NextItem(e) }} ref={nextButtonRef} >Next</button>
                    <br /> <br />
                    <div class="line-container" id='orline' >
                        <div class="line"></div>
                        <div class="or">or</div>
                        <div class="line"></div>
                    </div>

                    <br ></br>
                    <p class="connect-with">Connect with</p>
                    <br ></br>
                    <img src={google} style={{ cursor: 'pointer' }} />

                </div>



                <div className= { classNames("second-layer" , {
                                    "return" :open ,
                                     
                                    }) }id="second-layer" ref={secondLayerSignIn} >

                    <p class="no-account">Dont have an Acount ?</p>
                    <br />
                    <button class="sign-in" id="sign" onClick={handleMoveSignUp} ref={buttonRef} >Sign up</button>

                </div>


                <div className= { classNames("second-layer return-layer " , {
                                    "move" :open ,
                                    }) } id="second-layer" ref={secondLayerSignUp} >

                    <p class="no-account">You have an Acount ?</p>
                    <br />
                    <button class="sign-in" id="sign" onClick={handleMoveSignUp} ref={buttonRef} >Sign in</button>

                </div>



            </div>


        </div>
    )
}

export default Login
