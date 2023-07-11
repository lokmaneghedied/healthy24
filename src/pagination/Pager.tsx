import  { useState } from 'react';
import ReactPaginate from 'react-paginate';
//redux
import { useAppSelector  } from '../app/hooks'
//icons
import { AiOutlineDelete , AiOutlineEyeInvisible , AiOutlineClose , AiOutlineFileText , AiOutlineDownload} from "react-icons/ai";
//styling
import './../../src/pages/private/medicalHistory/medicalHistory.css'

function Items({ currentItems } : any) {
  
  const patients = useAppSelector((state)=>state.appointments)

  const [PatientInfo , setPatientInfo] = useState(false)
  const [currentPatient , setCurrentPatient] = useState(Object)

  const togglePatientInfo = (id:number) =>{
    setPatientInfo(true)
    patients.map((patient)=>{
      if(patient.id === id){
        setCurrentPatient(patient)
      }
    })
  }

  return (
    <div className="pagination-container divide-y md:divide-y-0">
       
       {/* LIST-HEADER */}
       <div className="pagination-container-header">
          <p className='pagination-container-header-patient'>Patient</p>
          <p className='pagination-container-header-appointment'>Appointment</p>
          <p className='pagination-container-header-date'>Date</p>
          <p className='pagination-container-header-time'>Time</p>
          <p className='pagination-container-header-status'>Status</p>
          <p className='pagination-container-header-action'>Action</p> 
        </div>
        
        {/* History-List */}
      {currentItems &&
        currentItems.map((item:any) => (
          <div 
            onClick={()=>togglePatientInfo(item.id)}
            key={item.id} 
            className='pagination-container-list-main-div'>
            {/* PATIENT */}
            <div className='patient-info-container'>
              <img className='patient-avatar' src={item.icon} alt="" />
              <span>
                <h2>{item.patient}</h2>
                <p className='text-gray'>{item.location}</p>
              </span>
            </div>
            
            {/* APPOINTMENT */}
            <span className='pagination-container-header-appointment '>
              <h1 className='md:hidden w-[50%]'>Patient</h1>
              <h1 className='font-medium md:font-normal md:bg-white md:w-full w-[50%]'>{item.title}</h1>
            </span>

            {/* DATE */}
            <span className='pagination-container-header-date'>
              <h1 className='md:hidden'>Date</h1>
              <h1>{item.date}</h1>
            </span>
            
            {/* TIME */}
            <span className='pagination-container-header-time'>
              <h1 className='md:hidden'>Time</h1>
              <h1 >{item.time}</h1>
            </span>
            
            {/* STATUS */}
            <div className='pagination-container-header-status'>
              <h1 
                className = {item.status === 'Success'? 'successClass' :
                item.status === 'Pending'? 'pendingClass' : 'canceledClass' }>
                  {item.status}
              </h1>
            </div>
            
            {/* ACTIONS */}
            <div className='pagination-container-action-content'>
              <AiOutlineEyeInvisible className='pagination-icon-class'/>
              <AiOutlineDelete className='pagination-icon-class'/>
            </div>
          </div>
        ))}
        
        {/* PATIENT-INFO */}
        {PatientInfo && <div className='black-background'></div>}
        {PatientInfo && <div className='patient-details-info-container'>

          {/* PATIENT-INFO-HEADER */}
          <div className='patient-details-info-header'>
            <h1 className='patient-details-info-header-title'>Medical History</h1>
            <AiOutlineClose className='pagination-CloseIcon-class' onClick={()=>setPatientInfo(false)}/>
          </div>

          {/* PATIENT-INFO-PROFILE */}
          <div className='patient-details-info-title'>
            <h1 className='patient-details-info-subtitle'>PATIENT INFORMATION</h1>
            <div className='patient-details-info-profile'>
              <img src={currentPatient.icon} alt="" />
              <span>
                <h2>{currentPatient.patient}</h2>
                <p className='text-gray'>{currentPatient.location}</p>
              </span>
            </div>
          </div>

          {/* PATIENT-INFO-PAYMENT-INFO */}
          <div className='patient-details-info-title'>
            <h1 className='patient-details-info-subtitle'>PAYMENT DETAIL</h1>
            <div className='patient-details-info-payment'>
              <div>
                <h1 className='text-gray'>FROM</h1>
                <p>{currentPatient.payFrom}</p>
              </div>
              <div>
                <h1 className='text-gray'>Pay On</h1>
                <p>{currentPatient.payOn}</p>
              </div>
              <div>
                <h1 className='text-gray'>Pay With</h1>
                <p>{currentPatient.payWith}</p>
              </div>
              <div>
                <h1 className='text-gray'>Status Payment</h1>
                <p className={currentPatient.status === 'Success'? 'successClass' :
                currentPatient.status === 'Pending'? 'pendingClass' : 'canceledClass' }>
                  {currentPatient.status}</p>
              </div>
            </div>
          </div>

          {/* PATIENT-INFO-INITIAL-PAYMENT */}
          <div className='patient-details-info-initial-payment'>
            <h1 className='patient-details-info-subtitle'>INITIAL PAYMENT</h1>
            <div className='patient-details-info-payment'>
              <h1 className='text-gray'>Medical Check-Up</h1>
              <h1 className='text-gray'>Medicine</h1>
              <h1 className='patient-details-info-payment-price'>${currentPatient.medicalCheckUp}</h1>
              <h1 className='patient-details-info-payment-price'>${currentPatient.medicine}</h1>
            </div>
          </div>

          <div className='patient-details-info-initial-payment'>
            <div className='patient-details-info-payment'>
              <h1 className='text-gray'>Medical Check-Up</h1>
              <h1 className='text-gray'>Medicine</h1>
              <h1 className='patient-details-info-payment-price'>${currentPatient.medicalCheckUp}</h1>
              <h1 className='patient-details-info-payment-price'>${currentPatient.medicine}</h1>
            </div>
          </div>

          {/* PATIENT-INFO-GRAND-PAYMENT */}
          <div className='patient-details-info-grand-payment'>
            <h1 className='patient-details-info-grand-payment-title'>GRAND TOTAL</h1>
            <h1 className='patient-details-info-grand-payment-result'>$520</h1>
          </div>

          {/* DOCUMENTATION */}
          <div className='patient-details-info-title'>
            <h1 className='patient-details-info-subtitle'>DOCUMENTATION</h1>
            <div className='patient-details-info-documentation-container'>
              <div className='patient-details-info-documentation-pdf'>
                <AiOutlineFileText className='pagination-icon-class' />
                <p>Medical-invoice.pdf</p>
              </div>
              <AiOutlineDownload className='pagination-icon-class' />
            </div>
          </div>
        </div>}
    </div>
  );
}

export function PaginatedItems({ itemsPerPage }:any) {
 
  const [itemOffset, setItemOffset] = useState(0);
  
  const items = useAppSelector((state)=>state.appointments)
  
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="......"
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName='pagination-active'
        className='pagination'
      />
    </>
  );
}
