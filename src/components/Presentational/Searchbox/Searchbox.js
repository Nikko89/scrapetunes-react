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
    fetch(
      `https://itunes.apple.com/search?term=${
        this.state.name
      }&limit=25&entity=album`
    )
      .then(res => res.json())
      .then(res => {
        this.props.searchList(res);
      });

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
