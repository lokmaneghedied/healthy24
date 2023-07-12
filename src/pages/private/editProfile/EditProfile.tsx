//redux
import { useAppDispatch , useAppSelector } from '../../../app/hooks'
import { editPicture , setCurrentDoctor } from "../../../features/doctor/doctorSlice";
//react-router-dom
import { NavLink , useNavigate } from 'react-router-dom'
//hooks
import { useState } from 'react';
//apiURL
// import apiConfig from '../../../apiConfig';
//assets
import { cover , doctorAvatar } from '../../../assets'
//styles
import './editProfile.css'

export const EditProfile = () => {

  const [fullName , setFullName] = useState('')
  const [specialty , setSpecialty] = useState('')
  const [location , setLocation] = useState('')
  const [description , setDescription] = useState('')

  const [profilePicture, setProfilePicture] = useState('');

  // const [err, setErr] = useState(false)

  const navigate = useNavigate();
  // const id = sessionStorage.getItem("doctorId")

  const dispatch = useAppDispatch()

  const currentDoctor = useAppSelector((state)=>state.doctor)

  const removePicture = () =>{
    dispatch(
      editPicture('')
      )
  }

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setProfilePicture(dataUrl);
        dispatch(
          editPicture(dataUrl)
        )
      };
    }
  };

  const saveChanges = (e:any) =>{
    e.preventDefault()
    const doct = {
      id : currentDoctor.id,
      fullName : fullName,
      title : specialty,
      location: location,
      profileImage : profilePicture,
      profileDescription : description,
    }
    dispatch(
      setCurrentDoctor(doct)
    )
    navigate('/healthy24/Profile')
    // fetch(`${apiConfig.apiUrl1}/${id}`,{
    //   method: 'PUT',
    //     body: JSON.stringify(doct),
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    // }).then((res)=>{
    //   if(res.ok){
    //     dispatch(
    //       setCurrentDoctor(doct)
    //     )
    //     navigate('/Profile')
    //   }
    //   else{
    //     setErr(true)
    //   }
    // })
  }

  return (
    <section className="editProfile_section">
          
          <p className="text-gray">Your profile will be displayed publicly so be carful what you share</p>

          {/* COVER */}
          <div className='editProfile-container'>
            <h1 className='profile-title'>Cover</h1>
            <img className='editProfile-cover' src={cover} alt="" />
          </div>

          {/* PROFILE-PICTURE */}
          <div className='editProfile-container'>
            <h1 className='profile-title'>Profile Picture</h1>
            <div className='editProfile-picture'>
              <img className='editProfile_avatar ' src={currentDoctor.profileImage ? currentDoctor.profileImage : doctorAvatar} alt="" />
              <label className='btn'>change picture
                <input 
                  className='editProfile-input-picture' 
                  type="file"  
                  onChange={handleProfilePictureChange}
                  accept="image/*"
                  />
              </label>

              <button className='white_btn' onClick={removePicture}>Remove</button>
            </div>
          </div>

          <form onSubmit={saveChanges}>
            {/* FULLNAME-INPUT */}
            <div className='editProfile-container'>
              <h1 className='profile-title'>Full name</h1>
              <input 
                className='editProfile_input' 
                type="text" 
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                placeholder='Enter your name here'
                required/>
            </div>

            {/* SPECIALTY-INPUT */}
            <div className='editProfile-container'>
              <h1 className='profile-title'>Specialty</h1>
              <input 
                className='editProfile_input' 
                type="text" 
                value={specialty}
                onChange={(e)=>setSpecialty(e.target.value)}
                placeholder='Enter your specialty here'
                required/>
            </div>

            {/* LOCATION-INPUT */}
            <div className='editProfile-container'>
              <h1 className='profile-title'>Location</h1>
              <input 
                className='editProfile_input' 
                type="text" 
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                placeholder='Enter your location here'
                required/>
            </div>

            {/* PROFILE-DESCRIPTION-INPUT */}
            <div className='editProfile-container'>
              <h1 className='profile-title'>Profile description</h1>
              <textarea 
                className='editProfile_input' 
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder='Enter your profile description here'
                required/>
            </div>
            
            {/* ERROR MESSAGE */}
            {/* {err && <p className='err-msg'>Something went wrong please try again</p>} */}
            
            {/* SAVE + CANCEL */}
            <div className='editProfile-buttons'>
              <NavLink className='white_btn' to='/healthy24/Profile'>Cancel</NavLink>
              <button className='btn'>Save changes</button>
            </div>
        </form>
          
    </section>
  )
}
