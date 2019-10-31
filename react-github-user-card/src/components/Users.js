import React from "react";
import UserCard from "./UserCard";

class Users extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return <UserCard user={user} key={user.id} />;
        })}
      </div>
    );
  }
}

export default Users;
