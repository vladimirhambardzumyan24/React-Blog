import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: "",
      inputContent: "",
    };
  }
  
  handleChangeTitle = (event) => {
    this.setState({ inputTitle: event.target.value });
  };
  onChangeContent = (event) => {
    this.setState({ inputContent: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            value={this.state.inputTitle}
            id="standard-basic"
            label="Title"
            onChange={this.handleChangeTitle}
          ></TextField>
          <TextField
            value={this.state.inputContent}
            id="standard-basic"
            label="Content"
            onChange={this.onChangeContent}
          ></TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.props.handleClickAdd({
                titleValue: this.state.inputTitle,
                contentValue: this.state.inputContent,
              });
            }}
          >
            ADD
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(User);
