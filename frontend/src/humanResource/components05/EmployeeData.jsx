import React, { useState, useEffect } from "react";
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
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:8090/hr/employee/getAll");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleEditEmployee = (id) => {
    console.log(`Edit employee with ID ${id}`);
  };

  const handleMakeAdministrator = async (employeeId) => {
    try {
      await axios.post(`http://localhost:8090/hr/administrator/create/${employeeId}`);
      // Refresh the table by fetching the updated employee list
      const response = await axios.get("http://localhost:8090/hr/employee/getAll");
      setEmployees(response.data);
    } catch (error) {
      console.error('Error making employee an administrator:', error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/hr/employee/delete/${id}`);
      // Refresh the table by fetching the updated employee list
      const response = await axios.get("http://localhost:8090/hr/employee/getAll");
      setEmployees(response.data);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
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
            {employees.map((employee) => (
              <TableRow key={employee.userId}>
                <TableCell className={classes.tableCell}>{employee.userId}</TableCell>
                <TableCell className={classes.tableCell}>{employee.firstName} {employee.lastName}</TableCell>
                <TableCell className={classes.tableCell}>{employee.email}</TableCell>
                <TableCell className={classes.tableCell}>{employee.position}</TableCell>
                <TableCell className={classes.tableCell}>{employee.division}</TableCell>
                <TableCell className={classes.tableCell}>
                  <Button variant="contained" color="primary" className={classes.actionButton} onClick={() => handleEditEmployee(employee.userId)}>Edit</Button>
                  <Button variant="contained" color="secondary" className={classes.actionButton} onClick={() => handleDeleteEmployee(employee.userId)}>Delete</Button>
                  <Button variant="contained" color="default" className={classes.actionButton} onClick={() => handleMakeAdministrator(employee.userId)}>Make As Admin</Button>
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
