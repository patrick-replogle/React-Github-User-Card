import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <div className="userCard">
        <img src={this.props.follower.avatar_url} alt="user" />
        <h3>{this.props.follower.login}</h3>
      </div>
    );
  }
}

export default UserCard;
