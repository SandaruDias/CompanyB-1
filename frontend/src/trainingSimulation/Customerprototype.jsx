import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function Customerprototype() {
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
      <Paper elevation={3} sx={{ marginTop:'20px', marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ padding: 5 }}>
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
            Customer Prototype
          </Typography>
          <Grid container spacing={3}>  
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Material
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="material"
                label="Material"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Colour
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="colour"
                label="Colour"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Shape
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="shape"
                label="Shape"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Design File
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Comments
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="comments"
                label="Comments"
                multiline
                fullWidth
                rows={4}
                variant="outlined"
              />
            </Grid> 
            <Grid item xs={12} sm={4}>
              <Button variant="contained" sx={{ color: "white" }}>
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
