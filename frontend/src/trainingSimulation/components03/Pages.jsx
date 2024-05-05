import { Container, CssBaseline, Typography } from "@material-ui/core";
import FileUploadform from "./FileUploadform";
import TrainingPage from './TrainingPage/TrainingPage'
import ManagerLogin from './ManagerLogin/ManagerLogin'
import RecipeReviewCard from "./RecipeReviewCard";
import { Link } from 'react-router-dom';
import Customerprototype from "../Customerprototype";

// Define components for different pages
export function DashboardPage() {
    return (
        <div>
            <RecipeReviewCard />
        </div>
    )
}

export function SimulationsPage() {
    return(
        <div>
            <nav>
                <Link to="/training-simulation">Back to Dashboard</Link> {/* Ensure the path matches your routing setup */}
            </nav>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <FileUploadform />
            </Container>
        </div>
    );
}


export function CoursesPage() {
    return (
        <div>
            <TrainingPage />
        </div>
    )
}

export function PrototypePage() {
    return (
        <div>
            <Customerprototype/>
        </div>
    );
    
}

export function ManagerPage() {
    return (
        <div>
            <ManagerLogin />
        </div>
    )
}