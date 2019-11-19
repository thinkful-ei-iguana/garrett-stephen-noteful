import React from "react";

export default function NotePageNav(props) {
  return (
    <div className="note-page-nav">
      {props.folder. && (
        <h3 className="folder-name">
          {props.folder.name}
        </h3>
      )}
    </div>
  )
}