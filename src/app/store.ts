import { configureStore } from '@reduxjs/toolkit'
import doctorReducer from '../features/doctor/doctorSlice';
import appointmentsReducer from '../features/appointments/appointmentsSlice';

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    appointments: appointmentsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch