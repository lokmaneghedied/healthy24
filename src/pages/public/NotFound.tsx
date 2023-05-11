import { NavLink } from "react-router-dom"
export const NotFound = () => {
  
  return (
    <div>
      <h1>This Page does not exist</h1>
      <NavLink to="/dashboard">Go Back to Home Page</NavLink>
    </div>
  )
}
