import React, { useState } from "react";
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
  Typography
} from "@material-ui/core";
import {
  Menu,
  AssignmentInd
} from "@material-ui/icons";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { DashboardPage, CoursesPage, SimulationsPage,PrototypePage } from "./components03/Pages"


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
          { Icon: AssignmentInd, text: "Simulations" },
          { Icon: PersonIcon, text: "Courses" },
          { Icon: LogoutIcon, text: "Prototyping" },
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
      case "Simulations":
        return <SimulationsPage />;
      case "Courses":
        return <CoursesPage />;
      case "Prototyping":
        return <PrototypePage />;
      default:
        return <DashboardPage />;
    }
  };

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
      <Box style={{ padding: 20 }}>
        {renderSelectedPage()}
      </Box>
    </>
  );
}
