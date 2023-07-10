// import { useParams } from "react-router-dom"
//redux
import { useAppSelector  } from '../app/hooks'
import { selectPatientById } from '../features/patients/patientsSlice';
//components
import { DateMark } from './DateMark';
interface Props{
  id: string;
}

export const NoteContainer = ({ id }:Props) => {

    // const {id} = useParams()
    // const patientId: string = id ?? ''
    const patient = useAppSelector((state)=>selectPatientById(state, Number.parseInt(id)))

  return (
    <div>
      {patient && <div className='space-y-4'>
        {patient.appointmentsNotes.map((appointment)=>(
          <div key={appointment.id} className='space-y-3'>
            <span className='flex items-center space-x-2'>
              <DateMark />
              <h1>{appointment.date}</h1>
            </span>
            <section className="rounded-lg bg-[#FAFAFA]  divide-y divide-[#DFE8F6]">
              <span>
                <h1 className='p-2 pb-0'>{appointment.title}</h1>
                <p className='text-[#848FAC] p-2'>{appointment.content}</p>
              </span>
              
              <span className="grid grid-cols-2 gap-4 pt-2 lg:flex lg:justify-between lg:p-2">
                
                <span className='text-center'>
                  <p className='text-[#848FAC]'>Treatment</p>
                  <p>{appointment.treatment}</p>
                </span>
                
                <span className='text-center'>
                  <p className='text-[#848FAC]'>Duration</p>
                  <p>{appointment.duration}</p>
                </span>
                
                <span className='col-span-2 text-center'>
                  <p className='text-[#848FAC]'>Document</p>
                  <p className='text-[#2B7BAE]'>{appointment.document}</p>
                </span>
              </span>

            </section>
          </div>
        ))}

      </div>}
    </div>
  )
}
