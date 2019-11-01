import React from "react";
import FollowersCard from "./FollowersCard";

class Followers extends React.Component {
  render() {
    return (
      <div>
        {this.props.followers.map(follower => {
          return <FollowersCard follower={follower} key={follower.id} />;
        })}
      </div>
    );
  }
}

export default Followers;
