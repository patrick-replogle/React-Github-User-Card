import React from "react";
import axios from "axios";
import Users from "./components/Users";
import "./App.css";
import logo from "./img/githublogo.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData = () => {
    axios
      .get(`https://api.github.com/users/patrick-replogle/followers`)
      .then(response => {
        console.log(response.data);
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>stuff</h1>
        <img src={logo} alt="github logo" />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
