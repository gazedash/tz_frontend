// @flow
import React, { Component } from "react";
import {A} from "./Common";
import mockAlbums from "../data/mockAlbums.json";

class UserAlbums extends Component {
  static defaultProps = {
    items: mockAlbums
  };
  render() {
    return (
      <div>
        Albums {/* JSON.stringify(this.props) */}
        {this.props.items.map(({ id, title, userId }) => (
          <A key={id} href={"/thumb/" + id}>
            <div>{title}</div>
            <div>{id} {userId}</div>
          </A>
        ))}
      </div>
    );
  }
}

export default UserAlbums;
