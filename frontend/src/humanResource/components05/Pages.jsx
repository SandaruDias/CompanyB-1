import React from "react";
import { Typography } from "@material-ui/core";
import SamplePageForm from "./SamplePageForm";
import ApplicationForm from "./ApplicationForm";
import EmployeeData from "./EmployeeData";
import EditEmployeePage from "./EditEmployeePage";
import AdministratorData from "./AdministratorData";
import ApplicatData from "./ApplicatData";

// Define components for different pages
export function DashboardPage() {
    return (
        <>
        <Typography variant="h5">Contacts Page Content</Typography>;
        
            
        </>
    )
}

export function SamplePage() {
    return (
        <>
            <Typography variant="h5">Contacts Page Content</Typography>;
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
            <Typography variant="h5">Attendance Page Content</Typography>
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

export function LogoutPage() {
    return <Typography variant="h5">Contacts Page Content</Typography>;
}


