import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";

import MenuBar from "./MenuBar";

import { makeStyles, useTheme } from "@material-ui/core/styles";

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

const Layout = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar edge="start">
          <Grid container alignItems="center">
            <Hidden lgUp>
              <Grid item xs={2} className={classes.toolBarGridItem}>
                <IconButton aria-label="left-sidebar">
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item className={classes.toolBarGridItem}>
              <IconButton aria-label="refresh">
                <RefreshIcon />
              </IconButton>
            </Grid>
            <Grid item xs className={classes.toolBarGridItem}>
              <Typography>Page Title</Typography>
            </Grid>
            <Hidden lgUp>
              <Grid item className={classes.toolBarGridItemAlt}>
                <IconButton aria-label="right-sidebar">
                  <PersonIcon />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid
        container
        className={classes.gridContainer}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Hidden mdDown>
          <Grid item xs={2} className={classes.gridItem}>
            <Paper className={classes.paper}>
              <MenuBar />
            </Paper>
          </Grid>
        </Hidden>
        <Grid item xs={true} className={classes.gridItem}>
          <Paper className={classes.paper}>
            <Grid container direction="row">
              <Grid item>
                <Typography>Main Content</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={3} className={classes.gridItem}>
            <Paper className={classes.paper}>SideBar Left</Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Layout;
