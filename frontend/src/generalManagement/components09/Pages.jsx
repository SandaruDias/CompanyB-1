import { Typography } from "@material-ui/core";


// Define components for different pages
export function DashboardPage() {
    return (
        <>
            <Typography variant="h5">Home Page Content General Management</Typography>
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