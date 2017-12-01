// @flow
import React, { Component } from "react";
import UserCard from "./UserCard";
import mockUsers from "../data/mockUsers.json";

class UserList extends Component {
  static defaultProps = {
    items: mockUsers,
    onClick: () => {}
  };

  render() {
    return <div>
    {this.props.items.map((item) => (
        <UserCard key={item.id} item={item} onClick={() => this.props.onClick(item.id)} />
    ))}
    </div>;
  }
}

export default UserList;
