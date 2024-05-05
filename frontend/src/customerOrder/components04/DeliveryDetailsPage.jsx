import React, { useState } from 'react';
import { Typography, Grid, TextField, Box, makeStyles, Button, Checkbox, Paper } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    smallBox: {
        width: '150px', // Adjust the width as needed
        height: '50px', // Adjust the height as needed
        padding: '10px', // Adjust the padding as needed
        border: '1px solid #ccc', // Adjust the border style as needed
        borderRadius: '5px', // Adjust the border radius as needed
    },
    submitButton: {
        marginTop: '20px', // Adjust the margin top as needed
    },
}));

export function DeliveryDetailsPage({setPage}) {
    const classes = useStyles();
    const [designChecked1, setDesignChecked1] = useState(false);
    const [designChecked2, setDesignChecked2] = useState(false);
    const navigate = useNavigate();

    const onSubmitForm = ()=>{
        var isValid = true;
        if(isValid){
            setPage(2);
        }
    }

    const handleDesignCheck1 = (event) => {
        setDesignChecked1(event.target.checked);
    };
    const handleDesignCheck2 = (event) => {
        setDesignChecked2(event.target.checked);
    };

    return (
        <>
         <br></br>
         <br></br>
         <Paper style={{padding: 50, width: 900 }} elevation={5} >
            <Typography variant="h4" style={{fontWeight:700}} alignItems="center">Delivery Details</Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br> 
            <Typography variant="h6">Delivery Address:</Typography>
            <Grid container spacing={2}  alignItems="center">
                <Grid item>
                    <TextField type="textBox" multiline rows={4}  variant="outlined" />
                </Grid>
            </Grid>
            <br></br>
            <div style={{display:'flex'}} >
           
            <Grid container spacing={2} alignItems="center">
            <Typography variant="h6">City</Typography>
                <Grid item>
                    <TextField type="textBox" variant="outlined" />
                </Grid>
            </Grid>
            <br></br>
            
            <Grid container spacing={2} alignItems="center">
            <Typography variant="h6">country</Typography>
                <Grid item>
                    <TextField type="textBox" variant="outlined" />
                </Grid>
            </Grid>
            </div>
            <br></br>
            <div style={{display:'flex'}} >
            
            <Grid container spacing={2} alignItems="center">
            <Typography variant="h6">Contact number</Typography>
                <Grid item>
                    <TextField type="number" variant="outlined" />
                </Grid>
            </Grid>
            <br></br>
            
            <Grid container spacing={2} alignItems="center">
            <Typography variant="h6">contact person number</Typography>
                <Grid item>
                    <TextField type="number" variant="outlined" />
                </Grid>
            </Grid>
            </div>
            <br></br>
            
            <br></br>
            <br></br>

            <br></br>
            </Paper>
            <Paper style={{padding: 50, width: 900, marginTop: 20 }} elevation={5} >
            <Typography variant="h6">Your order</Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Typography variant="h6">Total ($) = </Typography>
            </Paper>
            <Button variant="contained" color="primary" onClick={onSubmitForm} className={classes.submitButton}>
                Pay now
            </Button>
        </>
    )
}

export function SamplePage() {
    return <Typography variant="h5">Resume Page Content Customer Order</Typography>;
}

export function ProfilePage() {
    return <Typography variant="h5">Portfolio Page Content</Typography>;
}

export function LogoutPage() {
    return <Typography variant="h5">Contacts Page Content</Typography>;
}
