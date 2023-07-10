import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from "react-router-dom";
//firebase
import { initializeApp } from 'firebase/app';
import { config } from "./config/config";
import  AuthRoute from "./config/AuthRoute";
//Public_Pages
import { SignIn , SignUp , ResetPassword , OtpVerification , NotFound } from "./pages/public";
//Private_Pages
import { Home, DashBoard , Profile , EditProfile , MedicalHistory , PatientsList , PatientDetails , PatientsLayout , Appointments } from "./pages/private";
//Error Page
import { ErrorPage } from "./pages/public/ErrorPage";
//Loaders
import { doctorInfoLoader } from "./pages/private/home/Home";
initializeApp(config.firebaseConfig)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* PUBLIC ROUTES */}
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="resetpassword" >
          <Route index element={<ResetPassword />} />
          <Route path="otpverification/:email" element={<OtpVerification />} />
        </Route>

        {/* PRIVATE ROUTES */}
        <Route 
          path="/" 
          element={<AuthRoute > <Home /> </AuthRoute> }
          loader={doctorInfoLoader}
          errorElement={<ErrorPage />} >
          <Route path="Dashboard" element={<DashBoard />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="Medicalhistory" element={<MedicalHistory />} />
          <Route path="Patients" element={<PatientsLayout />} >
            <Route index element={<PatientsList />} />
            <Route path=":id" element={<PatientDetails/>}/>
          </Route>
          <Route path='Appointments' element={<Appointments />} />
        </Route>
        
        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export interface IApplicationProps {}

 const Application:React.FunctionComponent<IApplicationProps> = (props) => {
  return (
   <RouterProvider router={router} />
  );
}

export default Application;


// "patients":[
//   {
//       "id": 1,
//       "fullName":"Sarah Lee",
//       "location":"oran Algeria",
//       "weight" : "160lb",
//       "height":"1.80m",
//       "bloodType":"O- (Negative)",
//       "bloodPressure": "120/80mmHg",
//       "disease":"Diabetes",
//       "allergies":"Peanut"
//   },
//   {
//       "id": 2,
//       "fullName":"Mohammed Smith",
//       "location":"Algiers, Algeria",
//       "weight" : "200lb",
//       "height":"1.85m",
//       "bloodType":"A- (Positive)",
//       "bloodPressure": "120/80mmHg",
//       "disease":"Diabetes",
//       "allergies":"Peanut"
//   },
//   {
//       "id": 3,
//       "fullName":"Sarah Rodriguez",
//       "location":"oran Algeria",
//       "weight" : "160lb",
//       "height":"1.80m",
//       "bloodType":"O- (Negative)",
//       "bloodPressure": "120/80mmHg",
//       "disease":"Diabetes",
//       "allergies":"Peanut"
//   }
