import { useAppSelector , useAppDispatch } from '../../../app/hooks'
import {deleteAppointmentInv} from '../../../features/appointmentsInv/appointmentsInvt'

export const Appointments = () => {

  const appointmentsInv = useAppSelector((state)=>state.appointmentsInv)
  const dispatch = useAppDispatch()

  const removeAppointment = (id:number) =>{
    dispatch(
      deleteAppointmentInv(id)
    )
  }

  return (
    <div className='p-4 lg:space-y-4 overflow-y-auto w-fit '>
      <h1 className='font-bold text-[#192252] hidden lg:block'>Appointments</h1>
      <div className='space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 '>
        {appointmentsInv.map((appointmentInv)=>(
          <div key={appointmentInv.id} className='rounded-lg border border-[#DFE8F6] space-y-3 p-4 flex flex-col justify-around'>
              <section className='flex items-center space-x-2'>
                <img className='w-[50px] h-[50px]'  src={appointmentInv.icon} alt="patient profile" />
                <span>
                  <h1 className='text-[#192252]'>{appointmentInv.patient}</h1>
                  <p className='text-[#848FAC]'>{appointmentInv.time}</p>
                </span>
              </section>
              <p className='text-[#848FAC]'>{appointmentInv.content}</p>
              <div className='space-x-4 flex'>
                <button onClick={()=>removeAppointment(appointmentInv.id)} className='rounded-lg py-2 px-4 text-white bg-[#103F74] flex space-x-1'><p>Accept</p> <p className='hidden xl:block'>Appointment</p></button>
                <button onClick={()=>removeAppointment(appointmentInv.id)} className='rounded-lg py-2 px-4 border border-[#DFE8F6] text-[#192252] flex space-x-1'><p>Decline</p> <p className='hidden xl:block'>Appointment</p></button>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}
