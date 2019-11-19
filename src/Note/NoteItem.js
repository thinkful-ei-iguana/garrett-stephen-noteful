import React from "react";
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function NoteItem(props) {
  return (
    <div className="note-item">
      <h2 className="note-title">
        <Link to={`/note/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <div className="note-date-modified">
        <p className="note-date">
          Modified
          {' '}
          <span className="date">
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </p>
      </div>
    </div>
  );
}