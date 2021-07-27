import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Blocks({ blocks, takeBlock }) {
  const classes = useStyles();

  return blocks.map((blok) => (
    <Container maxWidth="lg" key={blok.id}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {blok.titleValue}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            {blok.contentValue}
          </Typography>
          <br />
          <NavLink to={`/blocks/${blok.id}`}>
            <Typography className={classes.pos} color="textSecondary">
              <Button color="primary" size="small" onClick={() => takeBlock(blok)}>
                Learn More
              </Button>
            </Typography>
          </NavLink>
        </CardContent>
        <CardActions>{blok.date}</CardActions>
      </Card>
      <br />
    </Container>
  ));
}
