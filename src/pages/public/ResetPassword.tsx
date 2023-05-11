//react-router
import { useNavigate } from 'react-router-dom'
//formik
import { useFormik , FormikErrors } from "formik";
//assets
import { resetPassword , logIn} from '../../assets'
//Styles
import './index.css'

interface FormValues {
  email: string ,
}

export const ResetPassword = () => {

  const navigate = useNavigate();
   
  const formik = useFormik({
    
    initialValues:{
        email:'',
    },
    onSubmit : values  =>{
      navigate(`otpverification/${values.email}`)
    },

    validate : values =>{
        
      let errors: FormikErrors<FormValues> = {};
        const emailRegex = /^\S+@\S+\.\S+$/

        if(!values.email){
            errors.email = 'this field is required'
            
        }else if (!emailRegex.test(values.email)){
            errors.email = 'Invalid email format'
        }
        return errors

    }
})

  return (
    <section className="signUp">
      {/* FORGOT PASSWORD */}
      <div className="signUp_content">

        <span className="title">
          <h1>Forgot password</h1>
          <img src={resetPassword} alt="" />
        </span>

        <p>Input your email to recover password to access Healthy 24</p>

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


          <button className="btn" type="submit">Continue</button>

        </form>

      </div>
      {/* IMAGE */}
      <img className="loginImg" src={logIn} alt="" />
      </section>  
  )
}    