import { appointments , dashboard , medicalHistory , messages , patients } from "./assets" 

export const navLinks = [
    {
        id:1,
        name:'Dashboard',
        icon: dashboard ,
        link: 'Dashboard'
    },
    {
        id:2,
        name:'Patients list',
        icon:  patients ,
        link: 'Patients'

    },
    {
        id:3,
        name:'Messages',
        icon:  messages ,
        link : 'Messages'
    },
    {
        id:4,
        name:'Appointments',
        icon:  appointments ,
        link : 'Appointments'
    },
    {
        id:5,
        name:'Medical History',
        icon:  medicalHistory ,
        link:'Medicalhistory'
    },
]
