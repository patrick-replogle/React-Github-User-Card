import React from "react";
import LambdaLogo from "../img/lambdalogo.png";

class UserCard extends React.Component {
  render() {
    return (
      <div className="userCard">
        <div className="userCardImgContainer">
          <img src={this.props.user.avatar_url} alt="user" />
        </div>
        <div className="userCardContentContainer">
          <img className="lambdaLogo" src={LambdaLogo} alt="lambda logo" />
          <h1>{this.props.user.login}</h1>
          <p>
            I'm a full stack web developer. Click below to view my code or
            browse other coders that I'm following.
          </p>
          <a href={this.props.user.html_url} target="blank">
            View My Code
          </a>
        </div>
      </div>
    );
  }
}

export default UserCard;
