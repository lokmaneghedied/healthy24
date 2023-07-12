//fireBase
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth"
//react-router
import { useNavigate , NavLink } from 'react-router-dom'
//hooks
import { useState } from "react"
//formik
import { useFormik , FormikErrors } from "formik";
//assets
import { hand , logIn} from '../../assets'
//Styles
import './index.css'
//icons
import { BsGoogle , BsFacebook } from "react-icons/bs";
import { AiFillEye , AiFillEyeInvisible } from "react-icons/ai";
//apiURL
// import apiConfig from "../../apiConfig";

interface Doctor {
  id  : string,
  fullName:string,
  title : string,
  location: string,
  profileDescription: string,
  profileImage : string
}

interface FormValues {
  fullName: string,
  email: string ,
  password :any 
}

export const SignUp = () => {

  const [passwordShown , setPasswordShown] = useState(false)

  const [err , setErr] = useState('')
  
  const auth = getAuth()
  
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
        fullName:'',
        email:'',
        password: ''
    },
    onSubmit : values  =>{
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((UserCredential)=>{
          const newDoctor:Doctor = {
            id : UserCredential.user.uid,
            fullName : values.fullName,
            location : "Algiers Algeria",
            title : "Your specialty",
            profileDescription : "your profile description",
            profileImage : ""
          }
          // fetch(`${apiConfig.apiUrl1}`,{
          //   method : 'POST',
          //   headers : {'Content-type':'application/json'} ,
          //   body: JSON.stringify(newDoctor)
          // }).then((res)=>{
          //   if(res.ok){
          //       setErr('')
          //       sessionStorage.setItem("doctorId", UserCredential.user.uid)
          //       navigate('/Dashboard')
          //   }else{
          //     setErr('something went wrong, please try again')
          //   }
          // }).catch(()=>{
          //   setErr('account created, failed to logIn ')
          // })

          sessionStorage.setItem("doctorId", UserCredential.user.uid)
          navigate('/Dashboard')

        }).catch((error)=>{
          setErr(error.code)
        })
    },
    validate : values =>{
        
        let errors: FormikErrors<FormValues> = {};
        const emailRegex = /^\S+@\S+\.\S+$/

        if(!values.fullName){
          errors.fullName = 'This field is required'
        }
        if(!values.email){
            errors.email = 'This field is required'
            
        }else if (!emailRegex.test(values.email)){
            errors.email = 'Invalid email format'
        }
        if(!values.password){
            errors.password = 'This field is required'
        }else if (values.password.length < 6){
          errors.password = 'Password should at least 6 characters  '
        }
        return errors

    }
})


  return (
    <section className="signUp">
      {/* SIGN-UP */}
      <div className="signUp_content">

        <span className="title">
          <h1 >Sign up your account </h1>
          <img src={hand} alt="" />
        </span>

        <p>Let's Enter Your data to continue use healthy 24 services</p>

        <form onSubmit={formik.handleSubmit}>
          <label>
            Full Name
            <input 
              type="text" 
              name="fullName" 
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your name here"
              className={formik.touched.fullName && formik.errors.fullName ? 'input_invalid' : 'input_valid'}/>
              {formik.touched.fullName && formik.errors.fullName && <p className="error_message">{formik.errors.fullName}</p>}
          </label>

          <label>
            Email
            <input 
              type="text" 
              name="email" 
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Email here" 
              className={formik.touched.email && formik.errors.email ? 'input_invalid' : 'input_valid'}/>
              {formik.touched.email && formik.errors.email && <p className="error_message">{formik.errors.email}</p>}
          </label>

          <label>
            Password
            <div className="password_input_container">
              <input 
                type={passwordShown ? 'text' : 'password'} 
                name="password" 
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Your Password here" 
                className={formik.touched.password && formik.errors.password ? 'input_invalid' : 'input_valid'}/>
                <div className="password_icon" onClick={()=>setPasswordShown(!passwordShown)}>
                  {!passwordShown && <AiFillEye />}
                  {passwordShown && <AiFillEyeInvisible />}
                </div>
            </div>
              {formik.touched.password && formik.errors.password && <p className="error_message">{formik.errors.password}</p>}
          </label>

          <div className="checkbox">
            <input type="checkbox"/> 
            <div>
              by sign up to healthy 24 you agree all 
              <span> term</span> and<span> condition</span>
              </div>
          </div>

          <button className="btn" type="submit">Sign Up</button>

        </form>
        
        {err &&  <p className="error_message">{err}</p>}

        <h1 className="subTitle">Or</h1>

        <button className="white_btn">
          <BsGoogle />
          Sign Up With google
        </button>
        
        <button className="white_btn">
          <BsFacebook />
          Sign Up With facebook
        </button>

        <h1 className="minTitle"> You Already have account ? 
          <NavLink className='link' to='healthy24' > Sign in</NavLink>
        </h1>

      </div>

      {/* IMAGE */}
      <img className="loginImg" src={logIn} alt="" />
    </section>  
  )
}
