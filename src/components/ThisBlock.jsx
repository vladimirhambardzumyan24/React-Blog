import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import "../App.css";

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

export default function ThisBlock({
  block,
  onDeleteBlok,
  onEditBlok,
  none,
  show,
  onSaveEdit,
  onChangeValue,
  changeValue
}) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" key={block.id}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {block.titleValue}
          </Typography>
          <br />
          <div className={show}>
            <Typography variant="body2" component="p">
              {block.contentValue}
            </Typography>
          </div>
          <div className={none}>
            <TextField
              onChange={onChangeValue}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Content"
              label="Comment"
              type="content"
              id="content"
              value={changeValue}
              autoComplete="current-password"
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                onSaveEdit(block);
              }}
            >
              Save
            </Button>
          </div>
          <br />
        </CardContent>
        <CardActions>{block.date}</CardActions>
        {block.email === window.localStorage.getItem("emailValue") ? (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                onDeleteBlok(block.id);
              }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                onEditBlok(block);
              }}
            >
              Edit Comment
            </Button>
          </>
        ) : (
          ""
        )}
      </Card>
      <br />
    </Container>
  );
}
