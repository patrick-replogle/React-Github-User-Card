import React from "react";
import FollowersCard from "./FollowersCard";

class Followers extends React.Component {
  render() {
    return (
      <>
        <div className="follwersContainer">
          <h2>People I'm following on Github:</h2>
        </div>
        <div className="followers">
          {this.props.followers.length === 0 && <h2>Loading...</h2>}
          {this.props.followers.map(follower => {
            return <FollowersCard follower={follower} key={follower.id} />;
          })}
        </div>
      </>
    );
  }
}

export default Followers;
