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
      user: "patrick-replogle",
      followers: [],
      input: ""
    };
  }

  componentDidMount() {
    this.fetchUserData(this.state.user);
    this.fetchUserfollowers(this.state.user);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.user !== this.state.user &&
  //     prevState.followers !== this.state.followers
  //   ) {
  //     this.fetchUserData(this.state.user);
  //     this.fetchUserfollowers(this.state.user);
  //   }
  // }

  fetchUserData = user => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  fetchUserfollowers = user => {
    axios
      .get(`https://api.github.com/users/${user}/followers`)
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

    //this is what I'm trying to do, but it's not working
    // this.setState({
    //   user: this.state.input
    // });
    this.fetchUserData(this.state.input);
    this.fetchUserfollowers(this.state.input);
    this.setState({
      input: ""
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
