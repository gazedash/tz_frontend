// @flow
import React, { Component } from "react";
import UserCard from "./UserCard";

class UserList extends Component {
  static defaultProps = {
    items: [],
    onClick: () => {},
    onMount: () => {}
  };

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <UserCard
            key={item.id}
            item={item}
            onClick={() => this.props.onClick(item.id)}
          />
        ))}
      </div>
    );
  }
}

export default UserList;
