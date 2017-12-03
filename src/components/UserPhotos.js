// @flow
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { withRouter } from "react-router-dom";
import * as R from "ramda";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const opacity = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const Img = styled.img`
  display: block;
  width: 150;
  height: 150;
  animation: ${opacity} 1s linear 1;
`;

class UserPhotos extends Component {
  static defaultProps = {
    items: [],
    onMount: () => {}
  };
  componentDidMount() {
    const id = R.pathOr(null, ["match", "params", "id"], this.props);

    this.props.onMount(id);
  }

  render() {
    return (
      <Flex>
        {this.props.items.map(item => (
          <Img key={item.thumbnailUrl} alt="" src={item.thumbnailUrl} />
        ))}
      </Flex>
    );
  }
}

export default withRouter(UserPhotos);
