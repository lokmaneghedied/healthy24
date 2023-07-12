import { NavLink } from "react-router-dom"
export const NotFound = () => {
  
  return (
    <div className="error-page">
      <h1 className="error-page-title">This Page does not exist yet</h1>
      <NavLink className="error-page-link" to="/healthy24/Dashboard">Go Back to Home Page</NavLink>
    </div>
  )
}
