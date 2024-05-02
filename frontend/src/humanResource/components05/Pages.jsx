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
        <Typography variant="h5">Contacts</Typography>;
        <EmployeeData />
            
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

export function LogoutPage() {
    return <Typography variant="h5">Contacts Page Content</Typography>;
}

export function NewPage() {
    return (
        <>
            <EditEmployeePage /> 
        </>
    );
}
