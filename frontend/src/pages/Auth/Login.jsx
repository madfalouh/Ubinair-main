import React, { useState, useEffect, useRef } from 'react'
import login from '../../img/login.svg'
import Avatar from '../../img/Avatar.svg'
import { Link, useNavigate } from 'react-router-dom'
import { dispatchLogin, dispatchGetUser } from '../../redux/actions/authAction'
import { isEmpty, isEmail } from '../../utils/validation/Validation'
import { useDispatch, useSelector } from 'react-redux'
import ReactDOM from 'react-dom'
import { dispatchToken } from '../../redux/actions/tokenAction'
import  Vector from  '../../img/Vector.png'
import lol from  '../../img/lol.png'
import google from '../../img/google.png'
import Sidebar from '../../components/sidebar'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: '',
}

const Login = () => {
    const i = useRef(0)
    const j = useRef(0)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const spanref =useRef()
    const firstLayer = useRef()
    const secondLayer = useRef()
    const registerLayer=useRef()
    const buttonRef = useRef()
    const step1Ref = useRef()
    const step2Ref = useRef()
    const step3Ref = useRef()
    const nextButtonRef = useRef()
    const backRef = useRef()
    const one =useRef()
    const two = useRef()
    const three = useRef()
    const [creds, setCreds] = useState(initialState)
    const { email, password, err, success } = creds

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
   
    }


    useEffect(() =>  {

        if (userInfo) {
             
         
        
            
            navigate('/')  
  

        }
    }, [navigate, userInfo, dispatch])

    useEffect(() => {
        one.current.style.fontWeight = "bold"
        const render = ()=>{
        const spans= []
        for(var i = 0 ; i <25 ; i++ ){
        spans.push( <span></span>)
                }
        ReactDOM.render(spans, spanref.current);
       }
      // render()
  }, [])


    const handleMoveSignUp = (e) => {
        e.preventDefault()
  if (i.current % 2 == 0) {      
            registerLayer.current.classList.remove("return-login");
            registerLayer.current.classList.remove("move-login");
            registerLayer.current.classList.add("return-login");
            registerLayer.current.style.display="flex"
            firstLayer.current.style.display="none"
            secondLayer.current.classList.remove("move");
            secondLayer.current.classList.remove("return");
            secondLayer.current.classList.add("move");
  } else {

            console.log(j);
            if(j.current===1){
                handleBack()
}

    
  if(j.current===2) {
 handleBack()
 handleBack()
}
            backRef.current.style.display="none"
            registerLayer.current.style.display="none"
            firstLayer.current.style.display="flex"
            firstLayer.current.classList.add("move-login");
            secondLayer.current.classList.add("return");
            buttonRef.current.textContent = 'Sign in';

}
i.current = i.current+1
    }


const NextItem  = (e) => {
j.current++ ;  
if(j.current==1) {
backRef.current.style.display="flex"
two.current.style.fontWeight = "bold"
one.current.style.fontWeight = "200"
step1Ref.current.style.display="none"
step2Ref.current.style.display="block"
}else if(j.current==2){
three.current.style.fontWeight = "bold"
two.current.style.fontWeight = "200"
step2Ref.current.style.display="none"
step3Ref.current.style.display="block"
nextButtonRef.current.textContent="Confirm"
}
}
const handleBack  = () => {
j.current-- ; 
console.log(j.current);
if(j.current==0) {
backRef.current.style.display="none"
two.current.style.fontWeight = "200"
one.current.style.fontWeight = "bold"
step2Ref.current.style.display="none"
step1Ref.current.style.display="block"
}else if(j.current==1){
two.current.style.fontWeight = "bold"
three.current.style.fontWeight = "200"
step3Ref.current.style.display="none"
step2Ref.current.style.display="block"
nextButtonRef.current.textContent = "Next"
} 
}

    return (
        <div>
   








    <div class="all">
        <div class="logo">
           
        </div>

        <p class="back"  ref={backRef}  onClick={handleBack} > ⬅ Back </p>

                <div class="login-form"  ref={firstLayer} >

                    <p class="title"> Hello ! </p>
                    <label for="email" class="email" id='label' >Email</label>
                    <input type="text" className='input-field'/> 
                    <label for="Password" class="password"  id='label'>Password</label>
                    <input type="password" className='input-field'/> 
                    <p className='forgot-password'>forgot password ?</p>
                    <br/> 
                    <button class="sign-in" id="confirm"  onClick={()=>{navigate('/projects')}} >Confirm</button>
                    <br/> <br/> 
                    <div class="line-container" id='orline' >
                        <div class="line"></div>
                        <div class="or">or</div>
                        <div class="line"></div>
                    </div>

                        <br ></br>
                    <p class="connect-with">Connect with</p>
                        <br ></br>
                    <img src={google}  style={{ cursor:'pointer'}}/>

                </div>



            
                <div class="login-form"  ref={registerLayer}  id="register" >

                    <p class="title"> Welcome ! </p>

                    <div class="line-container" id="numbers">

                        <div class="one" ref={one} >1</div>
                        <div class="two"  ref={two} >2</div>
                        <div class="three" ref={three} >3</div>

                    </div>

                    <div className='step1'  ref={step1Ref} >
                    <label for="email" class="email">Full Name</label>
                    <input type="text" className='input-field'/> 
                    <label for="Password" class="password">Email</label>
                    <input type="text" className='input-field'/> 
                    </div>
                    <div className='step2'  ref={step2Ref}  >
                    <label for="email" class="email">Phone Number</label>
                    <input type="text" className='input-field'/> 
                    <label for="Password" class="password">Domaine</label>
                    <input type="text" className='input-field'/> 
                    </div>
                    <div className='step3'  ref={step3Ref}  >
                    <label for="email" class="email">Password</label>
                    <input type="password" className='input-field'/> 
                    <label for="Password" class="password">Re-enter Password</label>
                    <input type="password" className='input-field'/> 
                    </div>
                     <br/> 
                    <br/> 
                    <button class="sign-in" id="confirm" onClick={NextItem}  ref={nextButtonRef} >Next</button>
                    <br/> <br/> 
                    <div class="line-container" id='orline' >
                        <div class="line"></div>
                        <div class="or">or</div>
                        <div class="line"></div>
                    </div>

                        <br ></br>
                    <p class="connect-with">Connect with</p>
                        <br ></br>
                    <img src={google}  style={{ cursor:'pointer'}}/>

                </div>



                <div class="second-layer" id="second-layer" ref={secondLayer} >

                    <p class="no-account">Dont have an Acount ?</p>
                       <br/>
                    <button class="sign-in" id="sign" onClick={handleMoveSignUp}  ref={buttonRef} >Sign up</button>

                </div>




    </div>


   </div>
    )
}

export default Login
