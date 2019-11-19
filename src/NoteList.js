import React, { Component } from "react";
import NoteItem from "./NoteItem";

class NoteList extends Component {
  render() {
    const noteItems = this.props.notes.map(note => <NoteItem note={note} />);
    return (
    <div className="note-list">
      {noteItems}
      <button className="add-note">Add note</button>
    </div>)
    ;
  }
}

export default NoteList;
