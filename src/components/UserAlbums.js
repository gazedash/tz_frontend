// @flow
import React, { Component } from "react";
import { A } from "./Common";
import { withRouter } from "react-router-dom";
import * as R from "ramda"

class UserAlbums extends Component {
  static defaultProps = {
    items: [],
    onClick: () => {},
    onMount: () => {}
  };
  componentDidMount() {
    const id = R.pathOr(null, ['match', 'params', 'id'], this.props)
    
    this.props.onMount(id);
  }
  render() {
    return (
      <div>
        Albums
        {this.props.items.map(({ id, title, userId }) => (
          <A
            onClick={() => this.props.onClick(id)}
            key={id}
            href={"/thumb/" + id}
          >
            <div>{title}</div>
            <div>
              {id} {userId}
            </div>
          </A>
        ))}
      </div>
    );
  }
}

export default withRouter(UserAlbums);
