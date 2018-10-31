import React, { Component } from "react";
import "./Searchbox.css";

export default class Searchbox extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchList(this.state.name);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <form
        className="search-form search-form-col"
        onSubmit={this.handleSubmit}>
        <input
          className="search-form--input"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit" className="jukebox-button">
          Get the music
        </button>
      </form>
    );
  }
}
