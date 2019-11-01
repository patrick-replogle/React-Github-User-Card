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
          <a href={this.props.user.html_url} target="blank">
            Click Here To View My Code
          </a>
        </div>
      </div>
    );
  }
}

export default UserCard;
