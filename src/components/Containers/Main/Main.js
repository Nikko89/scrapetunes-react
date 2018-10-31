import React, { Component } from "react";
import Home from "../../Presentational/Home/Home";
import ParticleBG from "../../Presentational/ParticleBG/ParticleBG";
import { connect } from "react-redux";
import { searchList } from "../../../redux/actions";

class Main extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <ParticleBG />
        <Home
          searchResults={this.props.searchResults}
          searchList={this.props.searchList}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state
});

const mapDispatchToProps = dispatch => ({
  searchList: text => dispatch(searchList(text))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
