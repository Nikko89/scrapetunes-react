import React, { Component } from "react";
import "./AlbumList.css";

export default class AlbumList extends Component {
  render() {
    return (
      <div className="album-container">
        <div
          className={
            this.props.layoutState === "verticalView"
              ? "album-list-vert"
              : "album-list-grid"
          }>
          {this.props.listUrl.map(album => {
            return (
              <div
                className={
                  this.props.layoutState === "verticalView"
                    ? "album-list--card-vert"
                    : "album-list--card-grid"
                }>
                <img
                  src={album.artworkUrl100}
                  alt={album.artistName + " " + album.collectionName}
                />
                <div className="album-details">
                  <h3>
                    {album.collectionName.length > 30
                      ? album.collectionName.substring(0, 29) + "..."
                      : album.collectionName}
                  </h3>
                  <b>{album.artistName}</b>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
