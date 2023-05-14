//firebase
import { getAuth, signOut } from 'firebase/auth';
//hooks
import { useLocation } from "react-router-dom";
import { useState , useEffect } from "react";
//react-router
import { NavLink } from "react-router-dom"
//constants
import { navLinks } from "../constants"
//styling
import './index.css'
//icons
import { BiLogOut } from "react-icons/bi";


export const SideNav = () => {

  const location = useLocation();
  const [toggleSideNav , setToggleSideNav ] = useState(false)
  const title = location.pathname.substr(1)

  const auth = getAuth();

  const logOut = () =>{
    signOut(auth)
    sessionStorage.removeItem("doctorId")
  }

  useEffect(()=>{
    
    if(title.toLocaleUpperCase() === 'PROFILE' || title.toLocaleUpperCase() === 'EDITPROFILE'){
      setToggleSideNav(true)
    }else{
      setToggleSideNav(false)
    }
  },[title])

  return (
    <div className={toggleSideNav ? 'sidebar-toggled' : 'sidebar'}>
      {navLinks.map((link)=>(
        <NavLink 
          key={link.id} 
          to={link.link} 
          className='nav-link'
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
  )
}
