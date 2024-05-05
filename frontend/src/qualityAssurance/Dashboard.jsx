import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';



import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography,
  Button
} from "@material-ui/core";
import {
  Menu,
  AssignmentInd
} from "@material-ui/icons";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { DashboardPage, ProfilePage, SamplePage,LogoutPage } from "./components07/Pages";

// Define styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#0047b3",
    height: "100%"
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "white"
  }
}));



export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  const toggleSlider = () => {
    setOpen(!open);
  };

  const handleListItemClick = (text) => {
    setSelectedPage(text);
    toggleSlider(); // Optionally close the drawer upon selection
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
      />
      <Divider />
      <List>
        {[
          { Icon: DashboardIcon, text: "Dashboard" },
          { Icon: AssignmentInd, text: "Sample" },
          { Icon: PersonIcon, text: "Profile" },
          { Icon: LogoutIcon, text: "Log out" }
        ].map((item, index) => (
          <ListItem
            className={classes.listItem}
            button
            key={index}
            onClick={() => handleListItemClick(item.text)}
          >
            <ListItemIcon className={classes.listItem}>
              <item.Icon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
    
  );

    

  // Render the selected component based on the current state
  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "Dashboard":
        return <DashboardPage />;
      case "Sample":
        return <SamplePage />;
      case "Profile":
        return <ProfilePage />;
      case "Log Out":
        return <LogoutPage />;
      default:
        return <DashboardPage />;
    }
  };
  const navigate = useNavigate();
  
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });



  return (

    
<>
      <CssBaseline />
      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Typography variant="h6">Company B</Typography>
            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
            
          </Toolbar>
        </AppBar>
      </Box>
    
      <div>
      <h1 className='title'>Quality Assuarance and Quality Control Page</h1>
      {/* <Link to='/Profile'>Go to profile page</Link> */}
      <br></br>
      {/* <Link to='/About'>Go to About page</Link><br></br> */}
      <h2 className='subtitle'>We love to hear from you !</h2>
      <div class="Button1-container">
      <Button className='Button1' onClick={() => navigate('/quality-assurance/AddConcern')}>Add Your Review</Button>
      <Button className='Button1' onClick={() => navigate('/quality-assurance/UserConcerns')}>View All Reviews</Button>
      </div>
      <div class="Button1-container">
      <Button className='Button2' onClick={() => navigate('/quality-assurance/ContactUs')}>Contact Us</Button>
      </div>

    </div>
    <Box className="rating-container"
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography className="rating-legend" component="legend">
        Rate Us
      </Typography>
      <StyledRating
        className="rating-stars"
        name="customized-10"
        defaultValue={2}
        max={10}
      />
    </Box>
    </>
  );

}
