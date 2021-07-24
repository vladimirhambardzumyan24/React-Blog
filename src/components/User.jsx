import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import UserBlocks from "./UserBlocks";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function User({
  onChangeTitle,
  onChangeContent,
  onClick,
  blocks,
  titleValue,
  contentValue,
  onDeleteBlok
}) {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={titleValue}
          id="standard-basic"
          label="Title"
          onChange={onChangeTitle}
        ></TextField>
        <TextField
          value={contentValue}
          id="standard-basic"
          label="Content"
          onChange={onChangeContent}
        ></TextField>
        <Button variant="contained" color="primary" onClick={onClick}>
          ADD
        </Button>
      </form>
      <UserBlocks blocks={blocks} onDeleteBlok={onDeleteBlok} />
    </div>
  );
}
