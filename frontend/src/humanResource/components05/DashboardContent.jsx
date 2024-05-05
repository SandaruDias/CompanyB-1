import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import welcomeBackgroundImage from './images/hr.jpg';

const useStyles = makeStyles((theme) => ({
  background: {
    minHeight: '100vh',
    position: 'relative',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundImage: `url(${welcomeBackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  welcomeMessage: {
    color: '#333333', 
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '3rem',
    backgroundColor: '#F0F0F0', 
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  distributionContainer: {
    textAlign: 'center',
  },
  distributionTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  divisionCard: {
    background: '#008080', 
    color: theme.palette.common.white,
    minHeight: 150,
  },
  divisionName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  employeeCount: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
}));

const DashboardContent = () => {
  const classes = useStyles();

  // Example division data
  const divisions = [
    { name: 'Engineering', employeeCount: 50 },
    { name: 'Sales', employeeCount: 30 },
    { name: 'Marketing', employeeCount: 25 },
    { name: 'Human Resources', employeeCount: 15 },
  ];

  return (
    <div className={classes.background}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom className={classes.welcomeMessage}>
          Welcome to the HR Management System
        </Typography>
        <div className={classes.distributionContainer}>
          <Typography variant="h4" align="center" className={classes.distributionTitle}>
            Employee Distribution by Division
          </Typography>
          <Grid container spacing={3} justify="center">
            {divisions.map((division, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Card className={classes.divisionCard}>
                  <CardContent>
                    <Typography variant="h6" className={classes.divisionName}>
                      {division.name}
                    </Typography>
                    <Typography variant="h4" className={classes.employeeCount}>
                      {division.employeeCount}
                    </Typography>
                    <Typography variant="body2" color="inherit">
                      Employees
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default DashboardContent;
