import React from "react";
import User from "./User";
import { getToDo ,ToDoSave} from "../helper/LocalStorage";

const idGenerator = () => {
  let id = 0;
  return () => {
    id += 1 + Math.random();
    return id;
  };
};
class Blocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: "",
      inputContent: "",
      blocks: getToDo() === null ? [] : getToDo(),
    };
  }
  componentDidUpdate() {
    ToDoSave(this.state.blocks);
  }
  handleChangeTitle = (event) => {
    this.setState({ inputTitle: event.target.value });
  };
  onChangeContent = (event) => {
    this.setState({ inputContent: event.target.value });
  };
  handleClickAdd = () => {
    if (this.state.inputContent && this.state.inputTitle) {
      this.setState((pathState) => {
        return {
          blocks: [
            ...pathState.blocks,
            {
              id: idGenerator(),
              titleValue: pathState.inputTitle,
              contentValue: pathState.inputContent,
              date: new Date().toLocaleString(),
            },
          ],
        };
      });
    }
    this.setState({ inputTitle: "", inputContent: "" });
  };

  handleDeleteBlok = (blok) => {
    this.setState((pastState) => ({
      blocks: pastState.blocks.filter((e) => e.id !== blok.id),
    }));
  };
  render() {
    return (
      <User
        onChangeTitle={this.handleChangeTitle}
        onChangeContent={this.onChangeContent}
        onClick={this.handleClickAdd}
        blocks={this.state.blocks}
        titleValue={this.state.inputTitle}
        contentValue={this.state.inputContent}
        onDeleteBlok={this.handleDeleteBlok}
      />
    );
  }
}
export default Blocks;
