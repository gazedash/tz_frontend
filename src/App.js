// @flow
import React, { Component } from "react";
import UserList from "./components/UserList";
import UserAlbums from "./components/UserAlbums";
import UserPhotos from "./components/UserPhotos";
import { Route, withRouter, Switch } from "react-router-dom";
import { LinkStyled as Link } from "./components/Common";
import { connect } from "react-redux";
import actions from "./store/actions";
import "./App.css";

class App extends Component {
  static defaultProps = {
    users: [],
    photos: [],
    albums: []
  };

  componentDidMount() {
    this.props.dispatch(actions.getUsers());
  }

  cardClick = id => {
    this.props.dispatch(actions.getAlbums(id));
    // to prevent recursive urls like /album/album/...
    if (!this.props.location.pathname.startsWith("/album")) {
      this.props.history.push("album/" + id);
    }
  };

  handleAlbumClick = id => {
    this.props.dispatch(actions.getPhotos(id));
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            children={
              <UserList onClick={this.cardClick} items={this.props.users} />
            }
          />
          {/* user id */}
          <Route
            path="/album/:id"
            children={
              <div>
                <Link to="/">Home</Link>
                <UserAlbums
                  onMount={this.cardClick}
                  onClick={this.handleAlbumClick}
                  items={this.props.albums}
                />
              </div>
            }
          />
          {/* album id */}
          <Route
            path="/thumb/:id"
            children={
              <div>
                <Link to="/">Home</Link>
                <UserPhotos
                  onMount={this.handleAlbumClick}
                  items={this.props.photos}
                />
              </div>
            }
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(({ albums, current, ...data }) => {
    // eslint-disable-next-line eqeqeq
    const curAlbums = albums.filter(album => album.userId == current.userId);
    return {
      albums: curAlbums,
      ...data
    };
  })(App)
);
