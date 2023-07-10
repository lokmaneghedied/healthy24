import { useParams } from "react-router-dom"
//redux
import { useAppSelector  } from '../../../app/hooks'
import { selectPatientById } from '../../../features/patients/patientsSlice';
//components
import { NoteContainer } from "../../../components/NoteContainer";
export const PatientDetails = () => {

  const {id} = useParams()
  const patientId: string = id ?? ''
  const patient = useAppSelector((state)=>selectPatientById(state, Number.parseInt(patientId)))

  return (
    <div className="w-full flex flex-col items-center space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4 lg:p-4 overflow-y-auto ">
      <div className="flex flex-col items-center space-y-4 lg:h-full w-full">
        {/* PATIENT_DETAILS */}
        {patient && <div className="flex flex-col items-center w-[90%] lg:w-full rounded-lg border border-[#DFE8F6] p-4 space-y-3 text-[#192252]">
          <img className="w-[50px] h-[50px]" src={patient.picture} alt="" /> 
          <p className="font-semibold">{patient.fullName}</p>       
          <span className="flex justify-center space-x-4">
            <p className="text-[#848FAC]">patient ID</p>
            <p>#{patient.id}</p>
          </span>       
          <p className="text-[#848FAC]">{patient.address}</p>   
          <div className="flex justify-around w-full">
            <span className="flex flex-col items-center">
              <p>{patient.appointments}</p> 
              <p>Appointment</p>
            </span>
            <span className="flex flex-col items-center">
              <p>{patient.completedAppointments}</p> 
              <p>Completed</p>
            </span> 
          </div>
          <button className="bg-[#103F74] text-white p-3 rounded-lg w-full text-center">Message patient</button>
        </div>}

        {/* PATIENT_INFO */}
        {patient && <div className="flex flex-col items-between w-[90%] lg:w-full rounded-lg border border-[#DFE8F6] p-4 space-y-3 text-[#192252]">
          <h1 className='font-bold'>Patient information</h1>
          <span className="w-full flex justify-between">
            <p className="text-[#848FAC]">Weight:</p>
            <p>{patient.weight}</p>
          </span>
          <span className="w-full flex justify-between">
            <p className="text-[#848FAC]">Height:</p>
            <p>{patient.height}</p>
          </span>
          <span className="w-full flex justify-between">
            <p className="text-[#848FAC]">Blood Type:</p>
            <p>{patient.bloodType}</p>
          </span>
          <span className="w-full flex justify-between">
            <p className="text-[#848FAC]">Blood Glucose:</p>
            <p>{patient.BloodGlucose}</p>
          </span>
          <span className="w-full flex justify-between">
            <p className="text-[#848FAC]">Blood Pressure:</p>
            <p>{patient.bloodPressure}</p>
          </span>
          <span className="w-full flex justify-between">
            <p className="text-[#848FAC]">Disease:</p>
            <p>{patient.disease}</p>
          </span>
          <span className="w-full flex justify-between">
            <p className="text-[#848FAC]">Allergies:</p>
            <p>{patient.allergies}</p>
          </span>
        </div>}
      </div>

      {/* NOTES */}
      {patient && <div className="w-[90%] lg:h-full lg:w-full lg:col-span-2 rounded-lg border border-[#DFE8F6] p-4 text-[#192252] ">
        <h1 className='font-bold pb-4'>Past Notes Appointment</h1>
        <NoteContainer id={patientId}/>
      </div>}
    </div>
  )
}
