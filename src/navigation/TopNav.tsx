import { Outlet , NavLink } from "react-router-dom"

export const TopNav = () => {
  return (
    <div>
      <h1>TopNav</h1>
      <NavLink to='/dashboard' >DashBoard</NavLink>
      <NavLink to='/appointments' >appointments</NavLink>
      <NavLink to='/profile' >profile</NavLink>
      <NavLink to='/patients' >patients</NavLink>
      <NavLink to='/medicalhistory' >medicalhistory</NavLink>
      <Outlet />
    </div>
  )
}
