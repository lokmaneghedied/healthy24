import  { useState } from 'react';
import ReactPaginate from 'react-paginate';
//redux
import { useAppSelector  } from './app/hooks'
//icons
import { AiOutlineDelete , AiOutlineEyeInvisible , AiOutlineClose , AiOutlineFileText , AiOutlineDownload} from "react-icons/ai";
//styling
import './../src/pages/private/medicalHistory/medicalHistory.css'

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
    <div className="p-4 my-4 space-y-2 rounded-lg border-2 border-[#dfe8f6]">
       
       {/* LIST-HEADER */}
       <div className="flex justify-between items-center rounded-lg text-[#2A3563] bg-[#EFF3FA] py-2 px-2 text-sm">
          <p className='w-[20%]'>Patient</p>
          <p className='w-[30%]'>Appointment</p>
          <p className='w-[15%]'>Date</p>
          <p className='w-[15%]'>Time</p>
          <p className='w-[15%]'>Status</p>
          <p className='w-[5%]'>Action</p> 
        </div>
        
        {/* History-List */}
      {currentItems &&
        currentItems.map((item:any) => (
          <div 
            onClick={()=>togglePatientInfo(item.id)}
            key={item.id} 
            className='flex justify-between items-center p-1 text-xs rounded-lg hover:bg-[#f3f5f8] hover:cursor-pointer'>
            {/* PATIENT */}
            <div className='patient-info flex justify-start items-center space-x-2 w-[20%] pr-2'>
              <img className='w-[40px] h-[40px]' src={item.icon} alt="" />
              <span>
                <h2>{item.patient}</h2>
                <p className='text-[#C5D0E6]'>{item.location}</p>
              </span>
            </div>
            
            {/* APPOINTMENT */}
            <h1 className='w-[30%]'>{item.title}</h1>
            
            {/* DATA */}
            <h1 className='w-[15%]'>{item.date}</h1>
            
            {/* TIME */}
            <h1 className='w-[15%]'>{item.time}</h1>
            
            {/* STATUS */}
            <div className='w-[15%]'>
              <h1 className='w-fit bg-green-200 rounded p-2'>{item.status}</h1>
            </div>
            
            {/* ACTIONS */}
            <div className='w-[5%] flex justify-start items-center space-x-2'>
              <AiOutlineEyeInvisible className='w-[15px] h-[15px]'/>
              <AiOutlineDelete className='w-[15px] h-[15px]'/>
            </div>
          </div>
        ))}
        
        {/* PATIENT-INFO */}
        {PatientInfo && <div className='bg-white patient-details-container absolute -top-2 right-0 h-screen w-[450px] z-20'>

          {/* PATIENT-INFO-HEADER */}
          <div className='w-full flex justify-between items-center p-4 border-b-2 border-[#dfe8f6]'>
            <h1 className='font-bold text-lg'>Medical History</h1>
            <AiOutlineClose className='cursor-pointer w-[15px] h-[15px]' onClick={()=>setPatientInfo(false)}/>
          </div>

          {/* PATIENT-INFO-PROFILE */}
          <div className='p-4 space-y-2 text-sm'>
            <h1 className='text-xs'>PATIENT INFORMATION</h1>
            <div className='flex justify-start items-center space-x-2 '>
              <img src={currentPatient.icon} alt="" />
              <span>
                <h2>{currentPatient.patient}</h2>
                <p className='text-[#C5D0E6]'>{currentPatient.location}</p>
              </span>
            </div>
          </div>

          {/* PATIENT-INFO-PAYMENT-INFO */}
          <div className='p-4 space-y-2 text-sm'>
            <h1 className='text-xs'>PAYMENT DETAIL</h1>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
              <div>
                <h1 className='text-[#C5D0E6]'>FROM</h1>
                <p>{currentPatient.payFrom}</p>
              </div>
              <div>
                <h1 className='text-[#C5D0E6]'>Pay On</h1>
                <p>{currentPatient.payOn}</p>
              </div>
              <div>
                <h1 className='text-[#C5D0E6]'>Pay With</h1>
                <p>{currentPatient.payWith}</p>
              </div>
              <div>
                <h1 className='text-[#C5D0E6]'>Statu Payment</h1>
                <p>{currentPatient.status}</p>
              </div>
            </div>
          </div>

          {/* PATIENT-INFO-INITIAL-PAYMENT */}
          <div className='p-4 mx-4 space-y-2 text-sm border-b-2 border-[#dfe8f6] border-dashed'>
            <h1 className='text-xs'>INITIAL PAYMENT</h1>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
              <h1 className='text-[#C5D0E6]'>Medical Check-Up</h1>
              <h1 className='text-[#C5D0E6]'>Medecine</h1>
              <h1 className='place-self-end'>${currentPatient.medicalCheckUp}</h1>
              <h1 className='place-self-end'>${currentPatient.medicine}</h1>
            </div>
          </div>

          <div className='p-4 mx-4 space-y-2 text-sm border-b-2 border-[#dfe8f6] border-dashed'>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
              <h1 className='text-[#C5D0E6]'>Medical Check-Up</h1>
              <h1 className='text-[#C5D0E6]'>Medecine</h1>
              <h1 className='place-self-end'>${currentPatient.medicalCheckUp}</h1>
              <h1 className='place-self-end'>${currentPatient.medicine}</h1>
            </div>
          </div>

          {/* PATIENT-INFO-GRAND-PAYMENT */}
          <div className='p-4 mx-4 text-sm grid grid-rows-1 grid-flow-col gap-4'>
            <h1 className='font-bold'>GRAND TOTAL</h1>
            <h1 className='place-self-end text-green-500'>$520</h1>
          </div>

          {/* DOCUMENTATION */}
          <div className='p-4 space-y-2 text-sm'>
            <h1 className='text-xs'>DOCUMENTATION</h1>
            <div className='flex items-center justify-around p-1 rounded-lg border border-[#dfe8f6] cursor-pointer'>
              <div className='flex items-center space-x-2'>
                <AiOutlineFileText className='w-[15px] h-[15px]' />
                <p>Medical-invoice.pdf</p>
              </div>
              <AiOutlineDownload className='w-[15px] h-[15px]' />
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
        activeClassName='text-[#192252] bg-[#EFF3FA] rounded px-3'
        className='flex justify-end text-[#A9B4CD] space-x-4 p-2'
      />
    </>
  );
}
