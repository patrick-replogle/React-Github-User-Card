import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <div className="followersCard">
        <div>
          <img src={this.props.follower.avatar_url} alt="user" />
        </div>
        <div>
          <h3>{this.props.follower.login}</h3>
        </div>
      </div>
    );
  }
}

export default UserCard;
