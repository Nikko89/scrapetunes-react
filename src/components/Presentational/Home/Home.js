import React, { Component } from "react";
import "./Home.css";
import Searchbox from "../Searchbox/Searchbox";
import AlbumList from "../AlbumList/AlbumList";
import FooterBar from "../FooterBar/FooterBar";

export default class Home extends Component {
  render() {
    const checkList = this.props.albumArray.length > 0;
    return (
      <div className="home-container">
        <div className="home-box">
          {!checkList ? (
            <header className="home-box--header">
              <h1>Welcome!</h1>
              <p>Type in the box to start looking up some music </p>
            </header>
          ) : null}

          <Searchbox searchList={this.props.searchList} />
        </div>

        {checkList ? (
          <React.Fragment>
            <AlbumList
              listUrl={this.props.albumArray}
              layoutState={this.props.layout}
            />
            <FooterBar
              toGridView={this.props.toGridView}
              toVerticalView={this.props.toVerticalView}
              reset={this.props.resetList}
              layoutState={this.props.layout}
            />
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
