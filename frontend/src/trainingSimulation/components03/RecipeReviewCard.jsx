import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container, CssBaseline, Grid } from "@material-ui/core";
import simulation from "./simulation.jpg";
import prototype from "./prototype.jpg";
import training from "./training.jpg";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Adminprototype from "../Adminprototype";
import Customerprototype from "../Customerprototype";
import { useNavigate } from "react-router-dom"; 

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  const navigate = useNavigate();
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
      <Grid
        container
        component="main"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 5 }}
      >
        <CssBaseline />

      <Grid item xs={12} sm={4}>
        {" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Prototype"
            subheader="September 14, 2022"
          />
          <CardMedia
            component="img"
            height="194"
            image={prototype}
            alt="Prototype"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Prototyping of electric circuits is an essential step in the development of electronic devices, 
            allowing engineers to explore design concepts, test theories, 
            and iterate functionalities before final production. 
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={()=>navigate("/training-simulation/prototypes")} >Add Request</Button>
            </Stack>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Importance:</Typography>
            
              <Typography paragraph>
              This process involves constructing early versions of a circuit, 
              typically using breadboards or prototype boards, to connect components 
              like resistors, capacitors, and integrated circuits. 
              Through prototyping, potential design flaws can be identified and corrected early, minimizing costly errors later in the manufacturing process.
               It also provides a hands-on opportunity to validate the circuit's performance against expected outcomes, ensuring that it meets the necessary specifications and functionality requirements. 
               This phase is crucial for innovations in electronics, facilitating adjustments and enhancements that optimize the final product's efficiency and reliability.
              </Typography>
            
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        {" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Simulation"
            subheader="November 1, 2024"
          />
          <CardMedia
            component="img"
            height="194"
            image={simulation}
            alt="simulation"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">Electronic circuit simulation is a critical process in the design and development of electronic systems, enabling engineers to test and 
            analyze the behavior of circuits before they are physically built.</Typography>
            
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={()=>navigate("/training-simulation/simulations")}>Add Request</Button>
            </Stack>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Why Simulation ?:</Typography>
              <Typography paragraph>
              This step uses specialized software tools to model the behavior of electronic components under various conditions, helping designers to foresee potential issues and evaluate the performance of different circuit configurations. 
              By simulating how the circuit responds to changes in voltage, current, or frequency, engineers can optimize designs and make necessary modifications without the cost and time associated with building multiple physical prototypes. 
              Electronic circuit simulation not only streamlines the development process but also enhances the reliability and functionality of the final products,
               making it an indispensable tool in modern electronic design workflows.
              </Typography>
             
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        {" "}
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Training"
            subheader="September 14, 2023"
          />
          <CardMedia
            component="img"
            height="194"
            image={training}
            alt="training"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={()=>navigate("/traning-simulation/training")}>Entroll</Button>
            </Stack>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  );
}