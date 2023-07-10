import { configureStore } from '@reduxjs/toolkit'
import doctorReducer from '../features/doctor/doctorSlice';
import appointmentsReducer from '../features/appointments/appointmentsSlice';
import patientsReducer from '../features/patients/patientsSlice';
import appointmentsInvReducer from '../features/appointmentsInv/appointmentsInvt'

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    appointments: appointmentsReducer,
    patients: patientsReducer,
    appointmentsInv : appointmentsInvReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch