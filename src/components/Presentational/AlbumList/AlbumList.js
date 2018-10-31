import React, { Component } from "react";
import "./AlbumList.css";

export default class AlbumList extends Component {
  state = {
    verticalView: true
  };

  toggleView() {
    this.setState({
      verticalView: !this.state.verticalView
    });
  }
  render() {
    return (
      <div className="album-container">
        <button onClick={() => this.toggleView()}>Change layout</button>
        <div
          className={
            this.state.verticalView ? "album-list-vert" : "album-list-grid"
          }>
          {this.props.listUrl.map(album => {
            return (
              <div
                className={
                  this.state.verticalView
                    ? "album-list--card-vert"
                    : "album-list--card-grid"
                }>
                <img
                  src={album.artworkUrl100}
                  alt={album.artistName + " " + album.collectionName}
                />
                <h3>
                  {album.collectionName.length > 30
                    ? album.collectionName.substring(0, 29) + "..."
                    : album.collectionName}
                </h3>
                <b>{album.artistName}</b>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
