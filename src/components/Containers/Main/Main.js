import React, { Component } from "react";
import Home from "../../Presentational/Home/Home";
import ParticleBG from "../../Presentational/ParticleBG/ParticleBG";
import { connect } from "react-redux";
import {
  searchList,
  resetList,
  toGridView,
  toVerticalView
} from "../../../redux/actions";

class Main extends Component {
  componentWillReceiveProps() {
    setTimeout(this.forceUpdate(), 1500);
  }
  render() {
    return (
      <React.Fragment>
        <ParticleBG />
        <Home
          albumArray={this.props.albumArray}
          layout={this.props.layout}
          searchList={this.props.searchList}
          resetList={this.props.resetList}
          toGridView={this.props.toGridView}
          toVerticalView={this.props.toVerticalView}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  albumArray: state.music,
  layout: state.layout
});

const mapDispatchToProps = dispatch => ({
  searchList: text => dispatch(searchList(text)),
  resetList: () => dispatch(resetList()),
  toGridView: () => dispatch(toGridView()),
  toVerticalView: () => dispatch(toVerticalView())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
