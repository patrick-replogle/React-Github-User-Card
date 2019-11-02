import React from "react";
import LambdaLogo from "../img/lambdalogo.png";

class FollowersCard extends React.Component {
  render() {
    return (
      <div className="followersCard">
        <div className="profileImageContainer">
          <img src={this.props.follower.avatar_url} alt="user" />
        </div>
        <div className="followersCardContent">
          <div className="followersCardLogoContainer">
            <img className="lambdaLogo" src={LambdaLogo} alt="lambda logo" />
          </div>
          <div className="followersText">
            <h3>{this.props.follower.login}</h3>
            <a href={this.props.follower.html_url} target="blank">
              View My Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowersCard;
