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

        {/* MEDICAL_HISTORY_responsive */}
        <div className='dashboard_medical_history_resp'>
        {patients.map((patient)=>{if(patient.id < 3){
          return (
            <div key={patient.id}>
              <h1 className='dashboard_medical_history_resp_title'>Medical History</h1>
              {/* PROFILE_INFO */}
              <div className='dashboard_medical_history_resp_profile_div'>

                {/* PROFILE_PICTURE + NAME + LOCATION */}
                <div className='dashboard_medical_history_resp_profile_info'>
                  <img className='patient-avatar' src={patient.icon} alt="" />
                  <span>
                    <h1 className='dashboard_medical_history_resp_profile_info_title'>{patient.patient}</h1>
                    <p className='text-gray'>{patient.location}</p>
                  </span>
                </div>
                
                {/* STATUS */}
                <p className={patient.status === 'Success' ? 'SuccessClass' : patient.status === 'Pending' ? 'PendingClass' : 'CanceledClass'} >{patient.status}</p>
              </div>

              {/* APPOINTMENT-TITLE */}
              <div className='dashboard_medical_history_resp_appointment'>
                <p>patient</p>
                <p>{patient.title}</p>
              </div>

              {/* APPOINTMET-DATE */}
              <div className='dashboard_medical_history_resp_title'>
                <p>Date</p>
                <p>{patient.date}</p>
              </div>
              
              {/* APPOINTMET-TIME */}
              <div className='dashboard_medical_history_resp_title'>
                <p>Time</p>
                <p>{patient.time}</p>
              </div>
              
              {/* PAYMENT_TOTAL*/}
               <div className='dashboard_medical_history_resp_appointment'>
                <p>Total</p>
                <p>${patient.medicine + patient.medicalCheckUp}</p>
              </div>

              {/* PAY WITH */}
              <div className='dashboard_medical_history_resp_title'>
                <p>pay from</p>
                <p>{patient.payFrom}</p>
              </div>

            </div>
          )}})}
        </div>

      </div>
    </section>
  )
}

 