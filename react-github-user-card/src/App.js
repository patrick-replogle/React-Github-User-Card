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
      user: {},
      mainUser: "patrick-replogle",
      followers: [],
      input: ""
    };
  }

  componentDidMount() {
    this.fetchUserData();
    this.fetchUserFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.fetchUserData();
      this.fetchUserFollowers();
    }
  }

  fetchUserData = () => {
    axios
      .get(`https://api.github.com/users/${this.state.mainUser}`)
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  fetchUserFollowers = () => {
    axios
      .get(`https://api.github.com/users/${this.state.mainUser}/followers`)
      .then(response => {
        this.setState({
          followers: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      mainUser: this.state.input
    });
  };

  render() {
    return (
      <div className="App">
        <img className="githubLogo" src={logo} alt="github logo" />
        <div className="formContainer">
          <h3>Type a username below to see other Github profiles:</h3>
          <div className="form">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.input}
              placeholder=""
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
        <UserCard user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
