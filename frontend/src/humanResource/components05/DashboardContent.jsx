import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcomeMessage: {
    marginBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  employeePhoto: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginBottom: theme.spacing(1),
  },
}));

const DashboardContent = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" className={classes.welcomeMessage}>
        Welcome to the HR System
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardHeader title="Employee Directory" />
            <CardContent className={classes.cardContent}>
              {/* Display employee photo, name, and job title */}
              <img src="/employee-photo.jpg" alt="Employee" className={classes.employeePhoto} />
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2" color="textSecondary">Software Engineer</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Add more cards for other sections like Quick Links, Upcoming Events, etc. */}
      </Grid>
    </Container>
  );
};

export default DashboardContent;
