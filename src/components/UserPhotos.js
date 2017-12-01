// @flow
import React, { Component } from "react";
import styled from "styled-components";
import mockPhotos from "../data/mockPhotos.json";

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Img = styled.img`
    display: block;
    width: 150;
    height: 150;
`

class UserPhotos extends Component {
  static defaultProps = {
    items: mockPhotos
  };
  render() {
    return (
      <Flex>
        {this.props.items.map(item => (
        //   <div key={item.thumbnailUrl}>
            <Img key={item.thumbnailUrl} alt="title" src={item.thumbnailUrl} />
        //   </div>
        ))}
      </Flex>
    );
  }
}

export default UserPhotos;
