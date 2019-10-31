import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <div className="userCard">
        <img src={this.props.user.avatar_url} alt="user" />
        <h3>{this.props.user.login}</h3>
      </div>
    );
  }
}

export default UserCard;
