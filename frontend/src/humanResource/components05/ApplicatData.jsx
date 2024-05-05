import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Paper,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#1E90FF", 
    color: "#FFFFFF", 
    padding: theme.spacing(2),
    margin: 0,
  },
  tableContainer: {
    backgroundColor: "#e0e0e0",
    padding: theme.spacing(2),
    marginTop: theme.spacing(0),
    marginBottom: 0,
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    border: "1px solid #dddddd",
    padding: theme.spacing(1),
    textAlign: "center",
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
}));

const mockApplicants = [
  { id: 1, name: "Applicant 1", email: "applicant1@example.com", positionApplied: "Software Developer", division: "IT" },
  { id: 2, name: "Applicant 2", email: "applicant2@example.com", positionApplied: "HR Manager", division: "HR" },
  // Add more mock applicants as needed
];

const ApplicatData = () => {
  const classes = useStyles();
  const [applicantData, setApplicantData] = useState([]);


  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        const response = await axios.get('http://localhost:8090/hr/applicant/getAll');
        setApplicantData(response.data);
      } catch (error) {
        console.error('Error fetching Applicant data:', error);
      }
    };
  
    fetchApplicantData();
  }, []);


  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Applicant Data
      </Typography>
      <Paper className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>ID</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Name</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Email</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Position Applied</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Division</TableCell> {/* New Division column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {applicantData && applicantData.map((applicant, index) => (
              <TableRow key={applicant.id}>
                <TableCell className={classes.tableCell}>{index+1}</TableCell>
                <TableCell className={classes.tableCell}>{applicant.firstName + " " + applicant.lastName}</TableCell>
                <TableCell className={classes.tableCell}>{applicant.email}</TableCell>
                <TableCell className={classes.tableCell}>{applicant.position}</TableCell>
                <TableCell className={classes.tableCell}>{applicant.division}</TableCell> {/* Render division */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default ApplicatData;
