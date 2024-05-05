import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Adminprototype() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const categories = [
    "science",
    "sports",
    "business",
    "politics",
    "entertainment",
    "technology",
    "world",
    "all"
  ];
  
  return (
    <>
      <Paper
        elevation={3}
        sx={{ marginTop: "20px", marginRight: "15%", marginLeft: "15%" }}
      >
        <Box sx={{ padding: 5 }}>
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
            Admin Prototype
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Thermal Test
                </Typography>
                <Checkbox {...label} />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Electrical Test
                </Typography>
                <Checkbox {...label} />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Approval
                </Typography>
                <Checkbox {...label} />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                Message
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button variant="contained" sx={{ color: "white" }}>
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
      </Paper>
      <div>
      </div>
    </>
  );
}
