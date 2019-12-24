import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import StarsIcon from "@material-ui/icons/Stars";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleIcon from "@material-ui/icons/People";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ChatIcon from "@material-ui/icons/Chat";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  gridContainer: {
    backgroundColor: "#5596e6"
  },
  gridItem: {
    backgroundColor: "#d3d8de"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  toolBarGridItem: {
    textAlign: "left"
  },
  toolBarGridItemAlt: {
    textAlign: "right"
  }
}));

const MenuBar = () => {
  const classes = useStyles();

  const menuText = [
    "Friends",
    "Stage",
    "Profile",
    "Factions",
    "Investors",
    "Chat"
  ];

  const menuIcons = [
    <EmojiPeopleIcon />,
    <StarsIcon />,
    <AccountCircleIcon />,
    <PeopleIcon />,
    <LocalAtmIcon />,
    <ChatIcon />
  ];

  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <Grid container justify="flex-end">
        <Grid item>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
      </Grid>
      <List>
        {menuText.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{menuIcons[index]}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default MenuBar;
