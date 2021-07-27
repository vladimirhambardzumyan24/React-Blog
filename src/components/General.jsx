import React from "react";
import User from "./User";
import {
  getBlocks,
  BlocksSave,
  saveThisBlock,
  getThisBlock,
} from "../helper/LocalStorage";
import Blocks from "./Blocks";
import { Switch, Route, withRouter } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import ThisBlock from "./ThisBlock";

const idGenerator = () => {
  let id = 0;
  return () => {
    id += 1 + Math.random();
    return id;
  };
};

const getRandomId = idGenerator();

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      none: "none",
      show: "show",
      change: "",
      thisBlock: getThisBlock() === null ? {} : getThisBlock(),
      blocks: getBlocks() === null ? [] : getBlocks(),
    };
  }
  
  componentDidUpdate() {
    BlocksSave(this.state.blocks);
  }

  handleLogIN = () => {
    this.setState((prevState) => {
      return {
        isLoggedIn: true,
      };
    });
  };

  handleClickAdd = (newObj) => {
    if (newObj.titleValue && newObj.contentValue) {
      this.setState((pathState) => {
        return {
          blocks: [
            ...pathState.blocks,
            {
              ...newObj,
              id: getRandomId(),
              date: new Date().toLocaleString(),
              email: window.localStorage.getItem("emailValue"),
            },
          ],
        };
      });
    }
  };

  handleDeleteBlok = (id) => {
    console.log(`object`, id);
    this.setState((pastState) => ({
      blocks: pastState.blocks.filter((e) => e.id !== id),
    }));
    this.props.history.push("/blocks");
  };

  takeBlock = (block) => {
    this.setState({ thisBlock: block });
    saveThisBlock(block);
  };

  handleRemoveBlock = () => {
    this.setState({ isLoggedIn: false });
    window.localStorage.removeItem("emailValue");
  };

  handleEditBlok = (blok) => {
    this.setState({ none: "show", show: "none" });
  };

  handleSaveEdit = (blok) => {
    const newBlocks = this.state.blocks.map((el) => {
      if (el.id === blok.id) {
        saveThisBlock(el);
        return { ...el, contentValue: this.state.change };
      }
      return el;
    });

    this.setState({
      none: "none",
      show: "show",
      blocks: [...newBlocks],
    });
    this.props.history.push("/blocks");
  };

  handleChange = (e) => {
    this.setState({ change: e.target.value });
  };

  render() {
    return (
      <>
        <Home
          isLoggedIn={this.state.isLoggedIn}
          handleRemoveBlock={this.handleRemoveBlock}
        />
        <Switch>
          <Route exact path="/sign-in">
            <SignIn handleLogIN={this.handleLogIN} />
          </Route>
          <Route exact path="/blocks">
            <Blocks blocks={this.state.blocks} takeBlock={this.takeBlock} />
          </Route>
          <Route exact path="/users">
            <User
              handleClickAdd={this.handleClickAdd}
              titleValue={this.state.inputTitle}
              contentValue={this.state.inputContent}
            />
          </Route>
          <Route exact path="/blocks/:id">
            <ThisBlock
              block={this.state.thisBlock}
              onDeleteBlok={this.handleDeleteBlok}
              onEditBlok={this.handleEditBlok}
              none={this.state.none}
              show={this.state.show}
              onSaveEdit={this.handleSaveEdit}
              onChangeValue={this.handleChange}
              changeValue={this.state.change}
            />
          </Route>
        </Switch>
      </>
    );
  }
}

export default withRouter(General);
