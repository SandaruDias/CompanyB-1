import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Paper,
  Button,
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
    backgroundColor: "#1E90FF", // Light blue background color
    color: "#FFFFFF", // White text color
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
  rejectButton: {
    backgroundColor: "#FF6347", 
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FF4500", 
    },
    marginRight: theme.spacing(1), 
  },
  createButton: {
    backgroundColor: "#32CD32", 
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#228B22", 
    },
  },
}));

const ApplicatData = () => {
  const classes = useStyles();
  const [applicantData, setApplicantData] = useState([]);

  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        const response = await axios.get("http://localhost:8090/hr/applicant/getAll");
        setApplicantData(response.data);
      } catch (error) {
        console.error("Error fetching Applicant data:", error);
      }
    };

    fetchApplicantData();
  }, []);

  const handleRejectApplicant = async (nicNo) => {
    try {
      await axios.delete(`http://localhost:8090/hr/applicant/delete/${nicNo}`);
     
      const response = await axios.get("http://localhost:8090/hr/applicant/getAll");
      setApplicantData(response.data);
    } catch (error) {
      console.error("Error rejecting Applicant:", error);
    }
  };

  const handleCreateEmploy = async (applicant) => {
    try {
      await axios.post("http://localhost:8090/hr/employee/create", {

        firstName: applicant.firstName,
        lastName: applicant.lastName,
        email: applicant.email,
        position: applicant.position,
        division: applicant.division,
        nicNo: applicant.nicNo,
        birthDay:applicant.birthDay,
        mobileNo: applicant.mobileNo,
        gender: applicant.gender,
        isMarried: applicant.isMarried,
        userId: applicant.nicNo,
        recruitedDate: "2024-06-30",
        salary: 223323,
        allowance: 424.0,
        otRate: 434,
        workingDays: 34.0,
        courseLevel: "2",
        address: 'colombo'
      });
     
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

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
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Division</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicantData &&
              applicantData.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell className={classes.tableCell}>{applicant.nicNo}</TableCell>
                  <TableCell className={classes.tableCell}>
                    {applicant.firstName} {applicant.lastName}
                  </TableCell>
                  <TableCell className={classes.tableCell}>{applicant.email}</TableCell>
                  <TableCell className={classes.tableCell}>{applicant.position}</TableCell>
                  <TableCell className={classes.tableCell}>{applicant.division}</TableCell>
                  <TableCell className={classes.tableCell}>
                    <Button
                      variant="contained"
                      className={classes.rejectButton}
                      onClick={() => handleRejectApplicant(applicant.nicNo)}
                    >
                      Reject
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.createButton}
                      onClick={() => handleCreateEmploy(applicant)}
                    >
                      Create Employ
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default ApplicatData;
