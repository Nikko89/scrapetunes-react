import React, { Component } from "react";
import "./FooterBar.css";

export default class FooterBar extends Component {
  toggleLayout(layout) {
    if (this.props.layoutState === "gridView") {
      this.props.toVerticalView();
    } else if (this.props.layoutState === "verticalView") {
      this.props.toGridView();
    }
  }
  render() {
    return (
      <div className="footer-options">
        <button className="optionBtn" onClick={() => this.props.reset()}>
          reset
        </button>
        <button className="optionBtn" onClick={() => this.toggleLayout()}>
          Switch layout
        </button>
      </div>
    );
  }
}
