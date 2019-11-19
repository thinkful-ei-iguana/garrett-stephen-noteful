import React from "react";
import { Link } from "react-router-dom";
import NoteItem from "./Note/NoteItem";
import "./NoteList.css";

export default function NoteList(props) {
  return (
    <section className="note-list">
      <ul>
        {props.notes.map(note =>
          <li key={note.id}>
            <NoteItem
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
    </section>
  );
}