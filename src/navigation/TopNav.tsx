//react-router
import { NavLink } from "react-router-dom";
//hooks
import { useLocation } from "react-router-dom";
import { useState , useEffect } from "react";
//icons
import { AiOutlineMenu , AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdNotificationsOutline , IoMdArrowBack } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
//assets
import { logo , doctorAvatar } from '../assets'
//constants
import { navLinks } from "../constants"

export const TopNav = () => {
  
  const [toggleSidenav , setToggleSideNav] = useState(false)
  const [inProfile , setInProfile] = useState(false)

  const location = useLocation();
  
  const title = location.pathname.substr(1)
  
  useEffect(()=>{
    if(title === 'Profile'){
      setInProfile(true)
      setToggleSideNav(false)
    }else{
      setInProfile(false)
    }
  },[title])

  return (
    <section>
      <div className="top-nav ">
        <img src={logo} alt="" />
        <div className='top-nav-content'>
            <CiSettings className="icon-responsive"/>
            <IoMdNotificationsOutline className="icon-responsive"/>
            <NavLink to='Profile'>
              <img className="icon" src={doctorAvatar} alt="" />
            </NavLink>
        </div>
      </div>
      
      <div className="top-nav-responsive">
        {!inProfile && <AiOutlineMenu onClick={()=>{setToggleSideNav(true)}} className="icon-responsive" />}
        {inProfile && <NavLink to='/Dashboard'>
              <IoMdArrowBack className="icon-responsive"/>
        </NavLink>}
        <h1 className="top-nav-title">{title}</h1>
        <IoMdNotificationsOutline className="icon-responsive" />

        {/* SIDE-NAV */}
        {toggleSidenav && <div className="side-nav">

          {/* HEADER */}
          <div className="side-nav-header">
            <AiOutlineMenuUnfold onClick={()=>{setToggleSideNav(false)}} className="icon-responsive"/>
            <img className="logo" src={logo} alt="" />
          </div>

          {/* PROFILE */}
          <div className="sidebar-responsive">            
            <NavLink to='/Profile' className='nav-link-responsive'>
              <img className="icon-responsive" src={doctorAvatar} alt="" />
              <p>Edit My Profile</p> 
            </NavLink>
            <span className='nav-link-responsive'>
              <IoMdNotificationsOutline className="icon-responsive"/>
              <p>Notifications</p>
            </span>
            <span className='nav-link-responsive'>
              <CiSettings className="icon-responsive"/>
              <p>Settings</p>
            </span>
          </div>

          {/* NAV-LINKS */}
          <div className="sidebar-responsive">
            {navLinks.map((link)=>(
              <NavLink 
                key={link.id} 
                to={link.link} 
                className='nav-link-responsive'
                >
                <img src={link.icon} alt="" />
                <p>{link.name}</p>
              </NavLink>
            ))}
          </div>
        </div>}
      </div>
    </section>
  )
}
