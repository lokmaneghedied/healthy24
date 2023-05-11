//react-router
import { useParams } from 'react-router-dom'
//assets
import { otpVerif , logIn} from '../../assets'
//Styles
import './index.css'

export const OtpVerification = () => {
  const {email} = useParams()

  const handlSubmit = (e:any) =>{
    e.preventDefault();
    console.log('btn clicked')
  }

  return (
    <section className="signUp">
      {/* FORGOT PASSWORD */}
      <div className="signUp_content">

        <span className="title">
          <h1>OTP Verification</h1>
          <img src={otpVerif} alt="" />
        </span>

        <p>Our team already sent an email in your inbox <span className='resetpassword'>{email}</span>  to access back your account</p>

        <form onSubmit={handlSubmit} >
          <label className='form_Otp'>
            <input 
              type="text"
              maxLength={1}
              className='input_Otp'
              />
            <input 
              type="text"
              maxLength={1}
              className='input_Otp'
              />
            <input 
              type="text"
              maxLength={1}
              className='input_Otp'
              />
            <input 
              type="text"
              maxLength={1}
              className='input_Otp'
              />
            <input 
              type="text"
              maxLength={1}
              className='input_Otp'
              />
            <input 
              type="text"
              maxLength={1}
              className='input_Otp'
              />
          </label>

          <button className="btn" type="submit">Continue</button>

        </form>

        <h1 className="minTitle">Didn't receive verification code ? 
          <span className='link'> Resend</span>
        </h1>

      </div>
      {/* IMAGE */}
      <img className="loginImg" src={logIn} alt="" />
      </section>
  )
}
