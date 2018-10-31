import React, { Component } from "react";

export default class AlbumList extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    let id = 0;
    let albumMapper = this.props.list.map(album => (
      <li key={id++}>{album.collectionName}</li>
    ));
    return <div className="album-list">{albumMapper}</div>;
  }
}
