//HOOKS
import { useAppSelector } from '../../../app/hooks'
import { useState } from 'react';
//Components
import BarCharts from '../../../components/barCharts/BarCharts'
import Calendar from 'react-calendar';
import { PaginatedItems } from '../../../pagination/Pager'
//assets
import { hand } from '../../../assets'
//styling
import  './dashboard.css'
import '../medicalHistory/medicalHistory.css'
import 'react-calendar/dist/Calendar.css';

export const DashBoard = () => {

  const currentDoctor = useAppSelector((state)=>state.doctor)
  const patients = useAppSelector((state)=>state.appointments)
  
  const [value, onChange] = useState(new Date());


  return (
    <section className='dashboard-section'>
      <div className='dashboard-div'>
        
        <div className='dashboard-profile-section'>
            {/* TITLE + PROFILE_IMAGE*/}
            <div className='dashboard-profile-main-div'>
              
              {/* TITLE */}
              <div className='dashboard-profile-title'>
                <div className='dashboard_profile_title_container'>
                  <h1>Welcome back,</h1>
                  <img className='dashboard_hand_icon' src={hand} alt="" />
                </div>
                <div>
                  Dr.{currentDoctor.fullName}
                </div>
              </div>

              {/* PROFILE_IMAGE */}
              <img className='dashboard_profile_icon' src={currentDoctor.profileImage} alt="" />
            </div>

            {/* BAR-CHARTS */}
            <div className='bar_charts_container '>
              <h1 className='bar_charts_title'>Visits This month</h1>
              <BarCharts />
            </div>      
        </div>
            
        {/* CALENDAR */}
        <div className='bar_charts_container'>
          <h1 className='bar_charts_title'>Calendar</h1>
          <Calendar onChange={()=>onChange} value={value} className="custom-calendar" />
        <div>
            {/* UPCOMING TITLE */}
            <div className='upcoming_title_div'>
              <h1 className='upcoming_title'>Upcoming</h1>
              <p className='upcoming_view_all'>view All</p>
            </div>
            {/* UPCOMING CONTENT */}
            <div className='upcoming_content_div'>
                <div className='upcoming_logo'>
                  <p className='upcoming_M'>M</p>
                </div>
                <p className='upcoming_title'>Monthly doctor's meet</p>
                <p className='upcoming_date'>8 April,2021 | 04:00 PM</p>
            </div>
            
          </div>
        </div>

        {/* MEDICAL_HISTORY */}
        <div className="dashboard_medical_history">
          <h1 className="medical-history-page-title">Medical History</h1>
          {/* LIST */}
          <PaginatedItems itemsPerPage={2}/>
        </div>
      </div>
    </section>
  )
}

 