// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#124E66',
//     },
//     secondary: {
//       main: '#748D92',
//     },
//     background: {
//       default: '#E2E2E2',
//       paper: '#FFFFFF',
//     },
//   },
// });

// function Dashboard() {
//   const [transactions, setTransactions] = useState([]);
//   const [summary, setSummary] = useState({
//     balance: 0,
//     income: 0,
//     expenses: 0,
//   });

//   useEffect(() => {
//     const fetchTransactions = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/transactions');
//             setTransactions(response.data || []); // Use an empty array as a fallback
//         } catch (error) {
//             console.error('Failed to fetch transactions:', error);
//             setTransactions([]); // Ensure state is still an array on error
//         }
//     };

//     fetchTransactions();
// }, []);


//   const calculateSummary = (transactions) => {
//     const income = transactions.filter(t => t.transactionMethod === 'invoice').reduce((acc, curr) => acc + curr.amount, 0);
//     const expenses = transactions.filter(t => t.transactionMethod === 'payroll').reduce((acc, curr) => acc + curr.amount, 0);
//     const balance = income - expenses;
//     setSummary({ balance, income, expenses });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ flexGrow: 1, padding: 3 }}>
//         <Grid container spacing={3}>
//           {/* Summary Boxes */}
//           <Grid item xs={12} sm={4}>
//             <Paper sx={{ padding: 2, textAlign: 'center' }}>
//               <Typography variant="h6">Balance</Typography>
//               <Typography variant="subtitle1">${summary.balance.toFixed(2)}</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Paper sx={{ padding: 2, textAlign: 'center' }}>
//               <Typography variant="h6">Income</Typography>
//               <Typography variant="subtitle1">${summary.income.toFixed(2)}</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Paper sx={{ padding: 2, textAlign: 'center' }}>
//               <Typography variant="h6">Expenses</Typography>
//               <Typography variant="subtitle1">${summary.expenses.toFixed(2)}</Typography>
//             </Paper>
//           </Grid>

//           {/* Transactions Table */}
//           <Grid item xs={12}>
//             <TableContainer component={Paper}>
//               <Table aria-label="simple table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Transaction ID</TableCell>
//                     <TableCell>Method</TableCell>
//                     <TableCell>Amount</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {transactions.map((transaction) => (
//                     <TableRow key={transaction.id}>
//                       <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
//                       <TableCell>{transaction.id}</TableCell>
//                       <TableCell>{transaction.transactionMethod}</TableCell>
//                       <TableCell>${transaction.amount.toFixed(2)}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//         </Grid>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FileDownload from 'js-file-download';
import { useAuth } from '../context/AuthContext';

const theme = createTheme({
  palette: {
      primary: {
          main: '#124E66', // Dark blue for primary elements
      },
      secondary: {
          main: '#748D92', // Medium gray-blue for secondary elements
      },
      error: {
          main: '#E53935', // Red for error states
      },
      background: {
          default: '#E2E2E2', // Light gray for background
          paper: '#FFFFFF', // White for paper elements
      },
      text: {
          primary: '#212A31', // Dark blue for text
          secondary: '#FFFFFF', // Slightly lighter blue for secondary text
      }
  },
});

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });

  const { user } = useAuth();


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await axios.get('http://localhost:8090/api/transactions');
        setTransactions(data || []); // Use an empty array as a fallback
        calculateSummary(data || []);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
        setTransactions([]); // Ensure state is still an array on error
      }
    };

    fetchTransactions();
  }, []);

  const calculateSummary = (transactions) => {
    const income = transactions.filter(t => t.transactionType === 'invoice').reduce((acc, curr) => acc + curr.income, 0);
    const expenses = transactions.filter(t => t.transactionType === 'payroll').reduce((acc, curr) => acc + curr.expense, 0);
    const balance = income - expenses;
    setSummary({ balance, income, expenses });
  };

  const handleDownload = async () => {
    try {
        const response = await axios.get(`http://localhost:8090/api/transactions/download`, {
            responseType: 'blob', // Important for handling binary data
            headers: { Authorization: `Bearer ${user.token}` }
        });
        FileDownload(response.data, 'transactions.xlsx');
    } catch (error) {
        console.error('Error downloading transactions:', error);
    }
};


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={3}>
          {/* Summary Boxes */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Balance</Typography>
              <Typography variant="subtitle1">Rs.{summary.balance.toFixed(2)}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Income</Typography>
              <Typography variant="subtitle1">Rs.{summary.income.toFixed(2)}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">Expenses</Typography>
              <Typography variant="subtitle1">Rs.{summary.expenses.toFixed(2)}</Typography>
            </Paper>
          </Grid>

          {/* Transactions Table */}
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: theme.palette.text.secondary }}>Transaction ID</TableCell>
                    <TableCell style={{ color: theme.palette.text.secondary }}>Income</TableCell>
                    <TableCell style={{ color: theme.palette.text.secondary }}>Expense</TableCell>
                    <TableCell style={{ color: theme.palette.text.secondary }}>Balance</TableCell>
                    <TableCell style={{ color: theme.palette.text.secondary }}>Transaction Date</TableCell>
                    <TableCell style={{ color: theme.palette.text.secondary }}>Reference ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.transactionId}>
                      <TableCell>{transaction.transactionId}</TableCell>
                      <TableCell>Rs.{transaction.income.toFixed(2)}</TableCell>
                      <TableCell>Rs.{transaction.expense.toFixed(2)}</TableCell>
                      <TableCell>Rs.{transaction.balance.toFixed(2)}</TableCell>
                      <TableCell>{new Date(transaction.transactionDate).toLocaleDateString()}</TableCell>
                      <TableCell>{transaction.referenceId}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button onClick={handleDownload} variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Download Excel
              </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;

