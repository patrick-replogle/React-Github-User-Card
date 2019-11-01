import React from "react";
import axios from "axios";
import Followers from "./components/Followers";
import UserCard from "./components/UserCard";
import "./App.css";
import logo from "./img/githublogo.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUserData();
    this.fetchUserfollowers();
  }

  fetchUserData = () => {
    axios
      .get(`https://api.github.com/users/patrick-replogle`)
      .then(response => {
        console.log(response.data);
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  fetchUserfollowers = () => {
    axios
      .get(`https://api.github.com/users/patrick-replogle/followers`)
      .then(response => {
        console.log(response.data);
        this.setState({
          followers: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  render() {
    return (
      <div className="App">
        <img className="githubLogo" src={logo} alt="github logo" />
        <UserCard user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
