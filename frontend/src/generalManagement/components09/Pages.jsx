import { Typography } from "@material-ui/core";
import ContactUs from "../ContactUs";
import Subscription from "../Subscription";


// Define components for different pages
export function DashboardPage() {
    return (
        <>
            <Typography variant="h5">Home Page Content General Management</Typography>
            <h1>Welcome to Our General Management System Dash Board!</h1>
            <ContactUs/>
            <Subscription/>
        </>
    )
}

export function SamplePage() {
    return <Typography variant="h5">Resume Page Content General Management</Typography>;
}

export function ProfilePage() {
    return <Typography variant="h5">Portfolio Page Content</Typography>;
}

export function LogoutPage() {
    return <Typography variant="h5">Contacts Page Content</Typography>;
}