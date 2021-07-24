import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Home() {
  const classes = useStyles();


  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/blocks" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Blocks
              </Button>
            </Link>
          </Typography>
          <Link to="/sign-in" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" >
              Log In
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}
