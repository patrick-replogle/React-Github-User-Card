import React from "react";
import LambdaLogo from "../img/lambdalogo.png";

class FollowersCard extends React.Component {
  render() {
    return (
      <div className="followersCard">
        <div className="profileImageContainer">
          <img src={this.props.follower.avatar_url} alt="user" />
        </div>
        <div className="profileContent">
          <img className="lambdaLogo" src={LambdaLogo} alt="lambda logo" />
          <h1>{this.props.follower.login}</h1>
        </div>
      </div>
    );
  }
}

export default FollowersCard;
