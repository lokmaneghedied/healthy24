//hooks
import { useEffect } from 'react';
//react-redux
import { useAppDispatch } from '../../../app/hooks'
import { setCurrentDoctor } from "../../../features/doctor/doctorSlice";
//react-router-dom
import { Outlet } from "react-router-dom"
//navigation
import { SideNav , TopNav } from "../../../navigation"
//styling
import './home.css'
//apiURL
import apiConfig from '../../../apiConfig';

export const Home = () => {

  const id = sessionStorage.getItem("doctorId")
  
  const dispatch = useAppDispatch()

  useEffect(()=>{
    fetch(`${apiConfig.apiUrl1}/${id}`)
    .then((res)=>{
      if(!res.ok){
        throw Error('something went wrong, please try again')
      }
      return res.json()
    }).then((data)=>{
      const doct = {
        id: data.id,
        fullName: data.fullName,
        location: data.location,
        title: data.title,
        profileDescription: data.profileDescription,
        profileImage: data.profileImage,
      }
      dispatch(
        setCurrentDoctor(doct)
      )
    })
  },[])

  return (
    <div className="home ">
        <TopNav />
        <div className="home-container">
          <SideNav />
          <Outlet  />
        </div>
    </div>
  )
}


// //loader

// export const doctorInfoLoader = async () =>{

//   const id = sessionStorage.getItem("doctorId")
  
//   const res = await fetch(`${apiConfig.apiUrl1}/${id}`)
//   if(!res.ok){
//     throw Error('something went wrong, please try again')
//   }
//   return res.json()
// }
