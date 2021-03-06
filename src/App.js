import React, { Component } from "react";
import "./App.css";
import Main from "./components/Containers/Main/Main";

class App extends Component {
  render() {
    return <Main store={this.props.store} />;
  }
}

export default App;
