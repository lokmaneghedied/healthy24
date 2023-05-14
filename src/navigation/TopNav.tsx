//react-router
import { NavLink } from "react-router-dom";
//hooks
import { useLocation } from "react-router-dom";
import { useState , useEffect } from "react";
import { useAppSelector } from '../app/hooks';
//firebase
import { getAuth, signOut } from 'firebase/auth';
//icons
import { AiOutlineMenu , AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdNotificationsOutline , IoMdArrowBack } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
//assets
import { logo , doctorAvatar } from '../assets'
//constants
import { navLinks } from "../constants"
//icons
import { BiLogOut } from "react-icons/bi";


export const TopNav = () => {
  
  const [toggleSidenav , setToggleSideNav] = useState(false)
  const [inProfile , setInProfile] = useState(false)

  const location = useLocation();
  
  const title = location.pathname.substr(1)
  
  const currentDoctor = useAppSelector((state)=>state.doctor)

  const auth = getAuth();

  const logOut = () =>{
    signOut(auth)
    sessionStorage.removeItem("doctorId")
  }

  useEffect(()=>{
    
    if(title === 'EditProfile'){
      setInProfile(true)
      setToggleSideNav(false)
    }else{
      setInProfile(false)
    }
  },[title])

  return (
    <section>
      
      {/* TOP-NAV */}
      <div className="top-nav ">
        <NavLink to='/Dashboard'>
          <img src={logo} alt="" />
        </NavLink>
        <div className='top-nav-content'>
            <CiSettings className="icon-responsive"/>
            <IoMdNotificationsOutline className="icon-responsive"/>
            <NavLink to='Profile'>
              <img className="icon" src={currentDoctor.profileImage ? currentDoctor.profileImage : doctorAvatar} alt="" />
            </NavLink>
        </div>
      </div>

      {/* TOP-NAV-RESPONSIVE */}
      <div className="top-nav-responsive">
        {!inProfile && <AiOutlineMenu onClick={()=>{setToggleSideNav(true)}} className="icon-responsive" />}
        {inProfile && <NavLink to='/Profile'>
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
              <img className="icon-responsive" src={currentDoctor.profileImage ? currentDoctor.profileImage : doctorAvatar}  alt="" />
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
            <button className='nav-link' onClick={logOut}>
              <BiLogOut className='icon-responsive '/>
              <p>Log out</p> 
            </button>
          </div>
        </div>}
      </div>
    </section>
  )
}


