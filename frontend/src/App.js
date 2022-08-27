import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Home from './pages/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useEffect, useRef, useState  } from 'react'
import Footer from './components/Footer'
import Nav from './components/Navbar/Nav'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ActivationEmail from './pages/Auth/ActivationEmail'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ResetPassword from './pages/Auth/ResetPassword'
import Dashboard from './pages/Dashboard/Dashboard'
import Tracker from './pages/Dashboard/Tracker'
import Calculator from './pages/Calculateur/Calculator'
import Background from './components/background/Background'
import { dispatchToken } from './redux/actions/tokenAction'
import jwt_decode from "jwt-decode";


import {
    dispatchLogin,
    dispatchGetUser,
    fetchUser,
} from './redux/actions/authAction'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile/Profile'
import { ToastContainer } from 'react-toastify'
import AOS from 'aos'
import 'aos/dist/aos.css'
import EditUser from './pages/EditUser/EditUser'
import Project from './pages/Auth/Projects'


function App() {
    AOS.init()
    const [loading, setLoading] = useState(false)
    const spans = []
    const getUserReducer = useSelector((state) => state.getUserReducer)
    const { user, isAdmin, isLogged: isLoggedgetuserReducer } = getUserReducer
    const auth = useSelector((state) => state.auth)
    const { userInfo, isLogged } = auth
    const token = useSelector((state) => state.token)
    const spanref=useRef()
    const dispatch = useDispatch()
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])


  useEffect(() => {
        const isRefresh =sessionStorage.getItem("is_reloaded") ;
        const token=localStorage.getItem("token")
          
     if ( isRefresh!=null && isRefresh.toString()==="true" && token!==null ) {
console.log((isRefresh.toString()==="true"   )  ); 
    console.log("jksdfjkdsfjksdfjkdfs");
    dispatch(dispatchGetUser(token))
        }
    }, [])



    useEffect(() => {
        
        const isLogin=  localStorage.getItem("isLogin")
        
        const firstLogin = localStorage.getItem('firstLogin')
        const isRefresh =sessionStorage.getItem("is_reloaded") ;
        console.log(isRefresh);
        if (firstLogin && isRefresh==null || isLogin.toString()=="true") {
           console.log("hththr"+isLogin);
            dispatch(dispatchToken())
        }
    }, [auth.isLogged, dispatch])

    // when refresh the token exsit but the logged change to false so we logged out so that's we do that

    useEffect(() => {
    const isLogin=  localStorage.getItem("isLogin") 
     const isRefresh =sessionStorage.getItem("is_reloaded") ;
        if (token && isRefresh==null || isLogin.toString()=="true") {
            
            //    dispatch(dispatchLogin()); //WE GOT  logged change to false so we transfer it to true
            //Get user information cuz after get token useeffecr re compile and get error mn dispatchLogin
         sessionStorage.setItem("is_reloaded",true)   
        console.log(token);
 dispatch(dispatchGetUser(token))
        localStorage.setItem("token",token)
        localStorage.setItem("isLogin",false)
        }
    }, [token, dispatch])



    return (
        <div>
         
                <ToastContainer />
                <Background  circles={25} />
                <>
                    <Routes>
                        <Route path="/*" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/projects" element={<Project />} />
                        <Route
                            path="/register"
                            element={userInfo ? <Profile /> : <Register />}
                        />
                        <Route
                            path="/user/activate/:activation_token"
                            element={<ActivationEmail />}
                        />
                        <Route
                            path="/forgot_password"
                            element={<ForgotPassword />}
                        />
                        <Route
                            path="/user/reset/:token"
                            element={<ResetPassword />}
                        />
                        <Route
                            path="/profile"
                            element={userInfo ? <Profile /> : <Login />}
                        />
                        <Route path="/tracker/:id" element={<Tracker />} />
                        <Route
                            path="/dashboard/:id"
                            element={userInfo ? <Dashboard /> : <Login />}
                        />
                        <Route
                            path="/calculator"
                            element={userInfo ? <Calculator /> : <Login />}
                        />
                        <Route
                            path="/user/:id"
                            element={isAdmin ? <EditUser /> : <NotFound />}
                        />
                        <Route path="/search/:keyword"  element={<Profile/>} />
                    </Routes>
                </>
   
       
        </div>
    )
}

export default App
