import { useRouteError , NavLink } from "react-router-dom"
import './index.css'

export const ErrorPage = () => {

    const err:any = useRouteError()

  return (
    <section className="error-page">
        <h1 className="error-page-title">Error</h1>
        <p>{err.message}</p>
        <NavLink className='error-page-link' to='/healthy24'> Back To LogIn page </NavLink>
    </section>
  )
}
