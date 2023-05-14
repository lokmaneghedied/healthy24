//react-router-dom
import { NavLink } from 'react-router-dom'
//redux
import { useAppSelector } from '../../../app/hooks'
//assets
import { cover , doctorAvatar } from '../../../assets'
//icons
import { CiLocationOn , CiEdit } from "react-icons/ci";
//styles
import './profile.css'

export const Profile = () => {

  const currentDoctor = useAppSelector((state)=>state.doctor)


  return (
    <section className='profile-section '>
      {/* PROFILE */}
      <div className='profile-container'>

          {/*COVER_IMAGE */}
          <img  className='cover-image'  src={cover} alt="" />

          {/* CONTENT */}
          <div className='content-container '>
            {/* NAME + TITLE + LOCATION */}
            <span className='profile-info'>
                <h1 className='profile-title'>dr. {currentDoctor.fullName}</h1>
                <p className='text-gray '>{currentDoctor.title}</p>
                <span className='location-container '>
                  <span className='location'>
                    <CiLocationOn />
                    <p>{currentDoctor.location}</p>
                  </span>
                </span>
            </span>

            {/* EDIT_PROFILE */}
            <span className='edit-profile-container'>
              <NavLink to='/EditProfile'>
                <CiEdit className='edit-icon'/>
              </NavLink>
              <NavLink className='edit-link' to='/EditProfile'>Edit profile</NavLink>
            </span>
          </div>
          
          {/* PROFILE-IMAGE */}
          <div className='profile-image'>
            <img className='editProfile_avatar'  src={currentDoctor.profileImage ? currentDoctor.profileImage : doctorAvatar} alt="" />
          </div>
          
      </div>
      {/* DESCRIPTION */}
      <div className='description-container'>
        <h1 className='profile-title '>Profile Description</h1>
        <p className='text-gray '>{currentDoctor.profileDescription}</p>
      </div>
    </section>
  )
}
