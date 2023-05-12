//react-route
import { Outlet } from "react-router-dom"
//navigation
import { SideNav , TopNav } from "../../../navigation"
//styling
import './index.css'
export const Home = () => {
  return (
    <div className="home">
        <TopNav />
        <div className="container">
          <SideNav />
          <Outlet />
        </div>
    </div>
  )
}
