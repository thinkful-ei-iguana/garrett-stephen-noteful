import React from 'react';
import NoteItem from '../Note/NoteItem';

export default function NotePage(props) {
  return (
    <section className="note-page">
      <NoteItem
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />
      <div className="note-page-content">
        {props.note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
  )
}