import React from "react";
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
    backgroundColor: "#f0f0f0", // Background color for the title
    padding: theme.spacing(2),
  },
  tableContainer: {
    backgroundColor: "#e0e0e0", // Background color for the table container
    padding: theme.spacing(2),
    marginTop: theme.spacing(2), // Add margin to the top of the table
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    border: "1px solid #dddddd", // Add border to table cells
    padding: theme.spacing(1),
  },
}));

// Mock employee data
const mockEmployees = [
  { id: 1, name: "John Doe", email: "john@example.com", jobPosition: "Software Engineer", contactNumber: "123-456-7890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", jobPosition: "HR Manager", contactNumber: "987-654-3210" },
  // Add more mock employees as needed
];

const EmployeeData = () => {
  const classes = useStyles();

  const handleEditEmployee = (id) => {
    // Handle edit functionality here, e.g., redirect to edit page
    console.log(`Edit employee with ID ${id}`);
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Employee Data
      </Typography>
      <Paper className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>ID</TableCell>
              <TableCell className={classes.tableCell}>Name</TableCell>
              <TableCell className={classes.tableCell}>Email</TableCell>
              <TableCell className={classes.tableCell}>Job Position</TableCell>
              <TableCell className={classes.tableCell}>Contact Number</TableCell>
              <TableCell className={classes.tableCell}>Actions</TableCell> {/* New column for edit buttons */}
            </TableRow>
          </TableHead>
          <TableBody>
            {mockEmployees.map(employee => (
              <TableRow key={employee.id}>
                <TableCell className={classes.tableCell}>{employee.id}</TableCell>
                <TableCell className={classes.tableCell}>{employee.name}</TableCell>
                <TableCell className={classes.tableCell}>{employee.email}</TableCell>
                <TableCell className={classes.tableCell}>{employee.jobPosition}</TableCell>
                <TableCell className={classes.tableCell}>{employee.contactNumber}</TableCell>
                <TableCell className={classes.tableCell}>
                  <Button variant="contained" color="primary" onClick={() => handleEditEmployee(employee.id)}>Edit</Button>
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
