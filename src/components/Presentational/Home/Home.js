import React, { Component } from "react";
import "./Home.css";
import Searchbox from "../Searchbox/Searchbox";
import AlbumList from "../AlbumList/AlbumList";

export default class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="home-container">
        <div className="home-box">
          <header className="home-box--header">
            <h1>Welcome!</h1>
            <p>Type in the box to start looking up some music </p>
          </header>
          <Searchbox
            searchList={this.props.searchList}
            searchResults={this.props.searchResults}
          />
        </div>
        <AlbumList list={this.props.searchResults} />
      </div>
    );
  }
}
