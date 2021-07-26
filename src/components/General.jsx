import React from "react";
import User from "./User";
import { getToDo, ToDoSave } from "../helper/LocalStorage";
import Blocks from "./Blocks";
import { Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";

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
      isLoggedIn:false,
      blocks: getToDo() === undefined ? [] : getToDo(),
    };
  }
  componentDidUpdate() {
    ToDoSave(this.state.blocks);
  }

  handleLogIN=()=>{
    this.setState((prevState)=>{
      return{
        isLoggedIn:true
      }
    })
  }
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
              email:window.localStorage.getItem("emailValue")
            },
          ],
        };
      });
    }
  };

  handleDeleteBlok = (blok) => {
    if(blok.email===window.localStorage.getItem("emailValue")){
      this.setState((pastState) => ({
      blocks: pastState.blocks.filter((e) => e.id !== blok.id),
    }));
    }
  };

  handleRemoveBlock=()=>{
    this.setState({isLoggedIn:false})
    window.localStorage.removeItem("emailValue")
  }

  render() {
    return (
      <>
      <Home isLoggedIn={this.state.isLoggedIn} handleRemoveBlock={this.handleRemoveBlock}/>
          <Switch>
            <Route exact path="/sign-in">
              <SignIn handleLogIN={this.handleLogIN}/>
            </Route>
            <Route exact path="/blocks">
              <Blocks
                blocks={this.state.blocks}
                onDeleteBlok={this.handleDeleteBlok}
              />
            </Route>
            <Route exact path="/users">
              <User
                handleClickAdd={this.handleClickAdd}
                titleValue={this.state.inputTitle}
                contentValue={this.state.inputContent}
              />
            </Route>
          </Switch>
      </>
    );
  }
}

export default General;
