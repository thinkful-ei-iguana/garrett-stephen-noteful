import React, { Component } from 'react';

export default class Folder extends Component {
  render() {
    const {id, name} = this.props.folder;
    return (
      <div className="folder-container">
        <a href="#">{props.name}</a>
      </div>
    )
  }
}