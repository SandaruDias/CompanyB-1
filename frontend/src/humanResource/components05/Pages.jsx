import React from "react";
import { Typography } from "@material-ui/core";
import SamplePageForm from "./SamplePageForm";
import ApplicationForm from "./ApplicationForm";
import EmployeeData from "./EmployeeData";
import EditEmployeePage from "./EditEmployeePage";

// Define components for different pages
export function DashboardPage() {
    return (
        <>
        <EmployeeData />
            
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
            <Typography variant="h5">Employee Data</Typography> 
        </>
    );
}

export function AdministratorDataPage() {
    return (
        <>
            <Typography variant="h5">Administrator Data</Typography>
        </>
    );
}

export function ApplicantDataPage() {
    return (
        <>
            <Typography variant="h5">APplicant Data</Typography>
        </>
    );
}

export function LogoutPage() {
    return <Typography variant="h5">Contacts Page Content</Typography>;
}


