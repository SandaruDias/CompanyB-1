import React, {useState, useEffect} from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Paper,
  makeStyles,
  Button
} from "@material-ui/core";

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
  actionButton: {
    marginRight: theme.spacing(1), 
  },
}));

const EmployeeData = () => {
  const classes = useStyles();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8090/hr/employ/getAll"
        );
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee:", error);
        
      }
    };

    fetchEmployee();
  }, []);

  const handleEditEmployee = (id) => {
    console.log(`Edit employee with ID ${id}`);
  };

  const handleDeleteEmployee = (id) => {
    console.log(`Delete employee with ID ${id}`);
    // Add logic to delete employee
  };

  const handleMakeAdministrator = (id) => {
    console.log(`Make employee with ID ${id} as an administrator`);
    // Add logic to make employee an administrator
  };


  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Employee Data
      </Typography>
      <Paper className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>ID</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Name</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Email</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Job Position</TableCell>
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Division</TableCell> 
              <TableCell className={`${classes.tableCell} ${classes.tableHeader}`}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee.map((employee, index) => (
              <TableRow key={employee.id}>
                <TableCell className={classes.tableCell}>{index+1}</TableCell>
                <TableCell className={classes.tableCell}>{employee.firstName + " " + employee.lastName}</TableCell>
                <TableCell className={classes.tableCell}>{employee.email}</TableCell>
                <TableCell className={classes.tableCell}>{employee.position}</TableCell>
                <TableCell className={classes.tableCell}>{employee.division}</TableCell>
                <TableCell className={classes.tableCell}>
                  <Button variant="contained" color="primary" className={classes.actionButton} onClick={() => handleEditEmployee(employee.id)}>Edit</Button>
                  <Button variant="contained" color="secondary" className={classes.actionButton} onClick={() => handleDeleteEmployee(employee.id)}>Delete</Button>
                  <Button variant="contained" color="default" className={classes.actionButton} onClick={() => handleMakeAdministrator(employee.id)}>Make Admin</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default EmployeeData;
