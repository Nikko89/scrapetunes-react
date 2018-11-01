import React, { Component } from "react";
import "./FooterBar.css";

export default class FooterBar extends Component {
  render() {
    return (
      <div className="footer-options">
        <button className="optionBtn" onClick={() => this.props.reset()}>
          reset
        </button>
        <button
          className="optionBtn"
          onClick={() => this.props.toVerticalView()}>
          Vertical View
        </button>
        <button className="optionBtn" onClick={() => this.props.toGridView()}>
          Grid View
        </button>
      </div>
    );
  }
}
