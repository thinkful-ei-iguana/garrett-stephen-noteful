import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NoteListNav(props) {
  return (
    <div className="note-list-nav">
      <ul className="note-list">
        {props.folders.map(folder => 
          <li key={folder.id}>
            <NavLink
              className="folder-link"
              to={`/folder/${folder.id}`}
            >
              {folder.name}
            </NavLink>
          </li>)}
      </ul>
    </div>
  );
}