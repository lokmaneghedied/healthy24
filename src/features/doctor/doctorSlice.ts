import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


export interface DoctorState {
    id: string,
    fullName: string,
    location: string,
    title: string,
    profileDescription: string,
    profileImage: string
}

const initialState: DoctorState = {
    id: "",
    fullName: "",
    location: "",
    title: "",
    profileDescription: "",
    profileImage: ""
}

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setCurrentDoctor: (state, action:PayloadAction<DoctorState>) => {
        return {
          ...state,
          ...action.payload,
        }
    },
    editPicture: (state, action:PayloadAction<string>)=>{
      state.profileImage = action.payload
    }
  },
})

export const selectDoctor = (state: RootState) => state.doctor

export const { setCurrentDoctor , editPicture } = doctorSlice.actions

export default doctorSlice.reducer