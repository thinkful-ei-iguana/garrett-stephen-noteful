import React, { Component } from "react";

class NoteItem extends Component {
  render() {
    const { id, name, modified } = this.props.note;
    return (
      <div className="note-item" key={id}>
        <h2>{name}</h2>
        <p>{modified}</p>
        <button type="button">Delete note</button>
      </div>
    );
  }
}

export default NoteItem;
