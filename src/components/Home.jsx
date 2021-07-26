import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";

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

export default function Home({ isLoggedIn ,handleRemoveBlock}) {
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
            <Typography variant="h6" className={classes.title}>
                
                  {
                    window.localStorage.getItem("emailValue")?<Link to="/users"><Button variant="contained" color="primary">
                    Create Post</Button></Link>:<Redirect to="/sign-in" />
                  }
                
            </Typography>
            {isLoggedIn? (
              <Link to="/sign-in" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary" onClick={handleRemoveBlock}>
                  Log Out
                </Button>
              </Link>
            ) : (
              <Link to="/sign-in" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary">
                  Log In
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
