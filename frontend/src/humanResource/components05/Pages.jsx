import React from "react";
import { Typography, Box } from "@material-ui/core";
import SamplePageForm from "./SamplePageForm";
import ApplicationForm from "./ApplicationForm";
import EmployeeData from "./EmployeeData";
import EditEmployeePage from "./EditEmployeePage";
import AdministratorData from "./AdministratorData";
import ApplicatData from "./ApplicatData";
import Attendance from "./Attendance"; 
import DashboardContent from "./DashboardContent";
import ShortLeaveForm from "./ShortLeaveForm";



// const PageContainer = ({ children }) => {
//     return (
//       <Box
//         style={{
//           backgroundColor: "lightgray", // Set your desired background color here
//           minHeight: "100vh", // Ensure the container takes up the full height of the viewport
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       >
//         {children}
//       </Box>
//     );
//   };

// Define components for different pages
export function DashboardPage() {
    return (
        <>
        <DashboardContent />
        
            
        </>
    )
}

export function SamplePage() {
    return (
        <>
           
            <SamplePageForm /> 
        </>
    );
}

export function ProfilePage() {
    return (
        <>
            <ApplicationForm /> 
        </>
    );
}

export function NewPage() {
    return (
        <>
            <EditEmployeePage /> 
        </>
    );
}

export function AttendancePage() {
    return (
        <>
            
            <Attendance />
            

        </>
    );
}

export function EmployeeDataPage() {
    return (
        <>
            
            <EmployeeData />
        </>
    );
}

export function AdministratorDataPage() {
    return (
        <>
            
            <AdministratorData />
        </>
    );
}

export function ApplicantDataPage() {
    return (
        <>
            
            <ApplicatData />
        </>
    );
}

export function ShortLeavePage() {
    return (
      <>
        <ShortLeaveForm /> 
        
      </>
    );
}
  
export function LogoutPage() {
    return <Typography variant="h5">Contacts Page Content</Typography>;
}


