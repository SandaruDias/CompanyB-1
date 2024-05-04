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
  actionButton: {
    marginRight: theme.spacing(1), // Add right margin between buttons
  },
}));

const mockAdministrators = [
  { id: 1, name: "Admin 1", email: "admin1@example.com", jobPosition: "System Administrator", division: "IT" },
  { id: 2, name: "Admin 2", email: "admin2@example.com", jobPosition: "Network Administrator", division: "IT" },
  // Add more mock administrators as needed
];

const AdministratorData = () => {
  const classes = useStyles();

  const handleDeleteAdministrator = (id) => {
    console.log(`Delete administrator with ID ${id}`);
    // Add logic to delete administrator
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Administrator Data
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
            {mockAdministrators.map(administrator => (
              <TableRow key={administrator.id}>
                <TableCell className={classes.tableCell}>{administrator.id}</TableCell>
                <TableCell className={classes.tableCell}>{administrator.name}</TableCell>
                <TableCell className={classes.tableCell}>{administrator.email}</TableCell>
                <TableCell className={classes.tableCell}>{administrator.jobPosition}</TableCell>
                <TableCell className={classes.tableCell}>{administrator.division}</TableCell>
                <TableCell className={classes.tableCell}>
                  <Button variant="contained" color="secondary" className={classes.actionButton} onClick={() => handleDeleteAdministrator(administrator.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Paper>
  );
};

export default AdministratorData;
