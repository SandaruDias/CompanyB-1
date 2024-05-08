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
import ManagerDash from "./ManagerMain/managerDash";
import PrototypeTable from "./ManagerMain/PrototypeTable";


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



export default function Dashboard2() {
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
          { Icon: AssignmentInd, text: "Updates" },
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
          </Toolbar>
        </AppBar>
      </Box>
      <ManagerDash/>
      <PrototypeTable/>
    </>
  );
}
