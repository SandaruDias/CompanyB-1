import React, { useState } from 'react';
import { Typography, Grid, TextField, makeStyles, Button, Checkbox, Paper } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { DeliveryDetailsPage } from './DeliveryDetailsPage';
import { CheckoutDetailsPage } from './CheckoutDetailsPage';

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

export function DashboardPage() {
    const classes = useStyles();
    const [designChecked1, setDesignChecked1] = useState(false);
    const [designChecked2, setDesignChecked2] = useState(false);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const onSubmitForm = ()=>{
        var isValid = true;
        if(isValid){
            setPage(1);
        }
    }

    const handleDesignCheck1 = (event) => {
        setDesignChecked1(event.target.checked);
    };
    const handleDesignCheck2 = (event) => {
        setDesignChecked2(event.target.checked);
    };

    return (
        <div style={{marginLeft:'20%'}} >{
            page === 0 ?         <>
            <br></br>
            <br></br>
            <Paper style={{padding: 50, width: 900 }} elevation={5} >
               <Typography variant="h4" style={{fontWeight:700}} >Order Details</Typography>
               <br></br>
               <input type="file" />
               <br></br>
               <br></br>
               <br></br>
               <Grid container spacing={2} alignItems="center">
                   <Typography variant="h6">Layers</Typography>
                   <Grid item>
                       <TextField type="number" variant="outlined" />
                   </Grid>
                   <Grid item>
                       <TextField type="number" variant="outlined" />
                   </Grid>
                   <Grid item>
                       <TextField type="number" variant="outlined" />
                   </Grid>
               </Grid>
               <br></br>
               <Grid container spacing={2} alignItems="center">
                   <Typography variant="h6">Thickness(mm)</Typography>
                   <Grid item>
                       <TextField type="number" variant="outlined" />
                   </Grid>
               </Grid>
               <br></br>
               <Grid container spacing={2} alignItems="center">
                   <Typography variant="h6">Dimensions(mm<sup>2</sup>)</Typography>
                   <Grid item>
                       <TextField type="number" variant="outlined" />
                   </Grid>
                   <Typography variant="h6">*</Typography>
                   <Grid item>
                       <TextField type="number" variant="outlined" />
                   </Grid>
               </Grid>
               </Paper>
               <br></br>
               <br></br>
               <Button variant="contained" color="primary" onClick={onSubmitForm} className={classes.submitButton}>
                   Submit
               </Button>
               <br></br>
               <br></br>
               <div style={{display:'flex'}} >
               <Typography variant="h6">Design check</Typography>
               <Checkbox checked={designChecked1} onChange={handleDesignCheck1} />
               </div>
               <br></br>
   <div  style={{display:'flex'}}>
   <Typography variant="h6">purts check</Typography>
               <Checkbox checked={designChecked2} onChange={handleDesignCheck2} />
   </div>
           </>: page === 1 ? <DeliveryDetailsPage setPage={setPage} /> : <CheckoutDetailsPage setPage={setPage} />
        }
        </div>
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
