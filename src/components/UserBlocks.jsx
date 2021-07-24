import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

export default function UserBlocks({ blocks,onDeleteBlok }) {
  const classes = useStyles();

  return blocks.map((blok) => (
    <>
      <Card className={classes.root} variant="outlined" key={blok.id}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {blok.titleValue}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            {blok.contentValue}
          </Typography>
          <br />
          <Typography className={classes.pos} color="textSecondary">
            <Button size="small">Learn More</Button>
          </Typography>
        </CardContent>
        <CardActions>{blok.date}</CardActions>
        <Button variant="contained" color="secondary" onClick={()=>{onDeleteBlok(blok)}}>
          Delete
        </Button>
      </Card>
      <br />
    </>
  ));
}
