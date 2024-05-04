import { Container, CssBaseline, Typography } from "@material-ui/core";
import FileUploadform from "./FileUploadform";
import TrainingPage from './TrainingPage/TrainingPage'
import RecipeReviewCard from "./RecipeReviewCard";


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
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <FileUploadform/>
        </Container>
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
    return <Typography variant="h5">Protoyping Form</Typography>;
}