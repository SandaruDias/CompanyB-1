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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
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
    <>
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
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Stack spacing={2} direction="row">
                <Button variant="contained">Add Request</Button>
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
                  Your ultimate hub for circuit design enthusiasts and
                  professionals alike. Whether you're delving into the world of
                  electronics for the first time or you're a seasoned engineer,
                  our platform is your go-to resource for all things related to
                  circuit design. From beginner tutorials to advanced
                  techniques, we offer a comprehensive range of content to cater
                  to your skill level and interests. Join our community of
                  passionate creators, exchange ideas, and stay updated on the
                  latest innovations in the field. Let's unleash the power of
                  imagination and engineering prowess together. Welcome to the
                  future of circuit design!
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
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Stack spacing={2} direction="row">
                <Button variant="contained">Add Request</Button>
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
                  Your premier destination for circuit simulation and analysis.
                  Step into the virtual realm of electrical engineering where
                  creativity meets precision. Whether you're a student,
                  hobbyist, or professional, our platform offers powerful
                  simulation tools to bring your designs to life. Explore our
                  intuitive interface, experiment with different components, and
                  test your circuits in real-world scenarios without the need
                  for physical prototyping. With our comprehensive suite of
                  simulation capabilities, you can validate your ideas,
                  troubleshoot potential issues, and optimize performance with
                  ease. Join our community of simulation enthusiasts and embark
                  on a journey of discovery and innovation. Welcome to the
                  future of circuit simulation!
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
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Stack spacing={2} direction="row">
                <Button variant="contained">Entroll</Button>
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
                  Your ultimate destination for circuit design training and
                  education. Whether you're looking to master the fundamentals
                  or advance your skills to the next level, our platform is your
                  comprehensive learning companion. Our curated courses,
                  developed by industry experts, cover everything from basic
                  concepts to advanced techniques in circuit design. Dive into
                  interactive modules, practical exercises, and hands-on
                  projects designed to build your expertise and confidence. With
                  our user-friendly interface and personalized learning paths,
                  you can progress at your own pace and achieve your goals with
                  ease. Join our thriving community of learners, collaborate
                  with peers, and unlock endless possibilities in the world of
                  circuit design. Welcome to a transformative learning
                  experience where knowledge meets innovation!
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
      <Customerprototype />
      <Adminprototype />
    </>
  );
}
