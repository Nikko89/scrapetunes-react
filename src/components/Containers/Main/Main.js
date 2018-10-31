import React, { Component } from "react";
import Home from "../../Presentational/Home/Home";
import ParticleBG from "../../Presentational/ParticleBG/ParticleBG";
import { connect } from "react-redux";
import { searchList, resetList } from "../../../redux/actions";

class Main extends Component {
  componentWillReceiveProps() {
    setTimeout(this.forceUpdate(), 1500);
  }
  render() {
    console.log("ewhiusfhewiurig", this.props);
    return (
      <React.Fragment>
        <ParticleBG />
        <Home
          albumArray={this.props.albumArray}
          searchList={this.props.searchList}
          resetList={this.props.resetList}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  albumArray: state
});

const mapDispatchToProps = dispatch => ({
  searchList: text => dispatch(searchList(text)),
  resetList: () => dispatch(resetList())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
