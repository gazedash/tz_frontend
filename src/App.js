// @flow
import React, { Component, Fragment } from "react";
import UserList from "./components/UserList";
import UserAlbums from "./components/UserAlbums";
import UserPhotos from "./components/UserPhotos";
import { Route, withRouter, Switch } from "react-router-dom";
import { LinkStyled as Link } from "./components/Common";
import "./App.css";

class App extends Component {
  cardClick = Sid => {
    const id = 10;
    this.props.history.push("album/" + id);
  };
  /* SWITCH F R U S T R A T I N G E X P E R I E N C E */
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            children={<UserList onClick={this.cardClick} />}
          />
          {/* user id */}
          <Route
            path="/album/:id"
            children={match => {
              console.log(match);
              return (
                <div>
                  <Link to="/">Home</Link>
                  <UserAlbums />
                </div>
              );
            }}
          />
          {/* album id */}
          <Route
            path="/thumb/:id"
            children={match => {
              console.log(match);
              return (
                <div>
                  <Link to="/">Home</Link>
                  <UserPhotos />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
