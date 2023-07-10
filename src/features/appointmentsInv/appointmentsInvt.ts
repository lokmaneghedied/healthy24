import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import type { PayloadAction } from '@reduxjs/toolkit'

//assets
import {  patient1 , patient2 , patient3 , patient4 , patient5} from '../../assets'

const initialState = [
    {
        id:1,
        patient:'Mr.John Smith',
        time : 'Jan 16 2023 At 09Am - 10Am',
        content:"I have been experiencing frequent headaches for the past week.it's becoming unbearable, and i'm worried",
        icon : patient1
    },
    {
        id:2,
        patient:'Mr.Mark Brown',
        time : 'Jan 16 2023 At 09Am - 10Am',
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Sed enim quasi eaque placeat provident voluptates cumque ",
        icon : patient2
    },
    {
        id:3,
        patient:'Mr.Michael Miller',
        time : 'Jan 16 2023 At 09Am - 10Am',
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Sed enim quasi eaque placeat provident voluptates cumque ",
        icon : patient3
    },
    {
        id:4,
        patient:'Mr.Jane Doe',
        time : 'Jan 16 2023 At 09Am - 10Am',
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Sed enim quasi eaque placeat provident voluptates cumque ",
        icon : patient4
    },
    {
        id:5,
        patient:'Mr.Mark Doe',
        time : 'Jan 16 2023 At 09Am - 10Am',
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Sed enim quasi eaque placeat provident voluptates cumque ",
        icon : patient5
    },
]

export const appointmentsInvSlice = createSlice({
    name: 'appointmentsInv',
    initialState,
    reducers : {
        deleteAppointmentInv : (state, action:PayloadAction<number>) =>{
           return state.filter((appointment)=>(
            appointment.id !== action.payload
           ))
        }
    },
})

export const selectAppointmentsInv = (state: RootState) => state.appointmentsInv
export const { deleteAppointmentInv } = appointmentsInvSlice.actions

export default appointmentsInvSlice.reducer 