//react-router
import { NavLink } from "react-router-dom"
//constants
import { navLinks } from "../constants"
//styling
import './index.css'

export const SideNav = () => {
  return (
    <div className="sidebar">
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
    </div>
  )
}
