import React, { Component } from "react";
import NoteItem from "./NoteItem";

class NoteList extends Component {
  render() {
    const noteItems = this.props.notes.map(note => <NoteItem note={note} />);
    return <div className="note-list">{noteItems}</div>;
  }
}

export default NoteList;
