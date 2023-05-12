//firebase
import {getAuth, signInWithEmailAndPassword } from "firebase/auth"
//react-router
import { useNavigate , NavLink } from 'react-router-dom'
//formik
import { useFormik , FormikErrors } from "formik";
//hooks
import { useState } from "react";
//assets
import { signIn , logIn} from '../../assets'
//Styles
import './index.css'
//icons
import { BsGoogle , BsFacebook } from "react-icons/bs";
import { AiFillEye , AiFillEyeInvisible } from "react-icons/ai";
interface FormValues {
  fullName: string,
  email: string ,
  password :any 
}

export const SignIn = () => {
  
  const auth = getAuth()
  const navigate = useNavigate();

  const [passwordShown , setPasswordShown] = useState(false)

  const [err, setErr] = useState('')

  const formik = useFormik({
    initialValues:{
        email:'',
        password: ''
    },
    onSubmit : values  =>{
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((UserCredential)=>{
          fetch(`http://localhost:5000/doctors/${UserCredential.user.uid}`)
          .then((res)=>{
            if(res.ok){
              console.log(res.json())
              navigate('/Dashboard')
            }else{
              setErr('something went wrong please try again')
            }
          }).catch((error)=>{
            setErr('something went wrong please try again')
          })
        }).catch((error)=>{
          setErr(error.code)
        })
      },
    validate : values =>{
        let errors: FormikErrors<FormValues> = {};
        const emailRegex = /^\S+@\S+\.\S+$/

        if(!values.email){
            errors.email = 'this field is required'
            
        }else if (!emailRegex.test(values.email)){
            errors.email = 'Invalid email format'
        }
        if(!values.password){
            errors.password = 'this field is required'
        }else if (values.password.length < 6){
          errors.password = 'password should at least 6 characters  '
        }
        return errors

    }
})

  return (
    <section className="signUp">
      {/* SIGN_IN */}
      <div className="signUp_content">

        <span className="title">
          <h1>Welcome To Healthy 24</h1>
          <img src={signIn} alt="" />
        </span>

        <p>Enter Your account to use healthy 24 services</p>

        <form onSubmit={formik.handleSubmit}>
          <label>
            Email
            <input 
              type="text" 
              name="email" 
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Email here" 
              className={formik.touched.email && formik.errors.email ? 'input_invalid' : 'input_valid'}
              />
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
              className={formik.touched.password && formik.errors.password ? 'input_invalid' : 'input_valid'}  
              />
              <div className="password_icon" onClick={()=>setPasswordShown(!passwordShown)}>
                {!passwordShown && <AiFillEye />}
                {passwordShown && <AiFillEyeInvisible />}
              </div>
            </div>
              {formik.touched.password && formik.errors.password && <p className="error_message">{formik.errors.password}</p>}
          </label>

          <div className="forgetPassword">
            <div className="checkbox">
                <input type="checkbox"/> 
                <div>
                  Remember me
                </div>
            </div>
            <div>
              <NavLink className="resetpassword" to='/resetpassword'>Forget password</NavLink>
            </div>
          </div>

          <button className="btn" type="submit">Sign In</button>

        </form>

        {err && <p className="error_message">{err}</p>}

        <h1 className="subTitle">Or</h1>

        <button className="white_btn">
          <BsGoogle />
          Sign in With google
        </button>

        <button className="white_btn">
          <BsFacebook />
          Sign in With facebook
        </button>

        <h1 className="minTitle"> You don't have an account ? 
          <NavLink className='link' to='/signup' > Sign Up</NavLink>
        </h1>

      </div>
      {/* IMAGE */}
      <img className="loginImg" src={logIn} alt="" />
    </section>  
  )
}
