// @flow
import React, { Component } from "react";
import { Card } from "./Common";
import { withRouter } from "react-router-dom";
import * as R from "ramda"

const AlbumCard = Card.extend`
  font-size: 20px;
  padding: 15px;
`;
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
          <AlbumCard
            onClick={() => this.props.onClick(id)}
            key={id}
            href={"/thumb/" + id}
          >
            <div>{title}</div>
          </AlbumCard>
        ))}
      </div>
    );
  }
}

export default withRouter(UserAlbums);
