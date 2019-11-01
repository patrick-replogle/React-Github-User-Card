import React from "react";
import axios from "axios";
import Followers from "./components/Followers";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import "./App.css";
import logo from "./img/githublogo.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "patrick-replogle",
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUserData();
    this.fetchUserfollowers();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.user !== this.state.user) {
  //     this.setState({
  //       followers: []
  //     });
  //   }
  //   this.fetchUserData();
  //   this.fetchUserfollowers();
  // }

  fetchUserData = () => {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
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
      .get(`https://api.github.com/users/${this.state.user}/followers`)
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

  // handleChange = event => {
  //   this.setState({
  //     user: event.target.value
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     user: event.target.value
  //   });
  // };

  render() {
    return (
      <div className="App">
        <img className="githubLogo" src={logo} alt="github logo" />
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          user={this.state.user}
        />
        <UserCard user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
