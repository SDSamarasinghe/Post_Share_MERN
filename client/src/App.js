import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import NavBar from "./components/NavBar";
import PostDetails from "./components/PostDetails";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/add" exact component={CreatePost}></Route>
            <Route path="/post/:id" exact component={PostDetails}></Route>
            <Route path="/edit/:id" exact component={EditPost}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
