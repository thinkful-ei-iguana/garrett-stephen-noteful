import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NoteList from '../NoteList/NoteList';
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePage from '../NotePage/NotePage';
import NotePageNav from '../NotePageNav/NotePageNav';
import {getNotesForFolder, findNote, findFolder} from '../notes-helpers';
import dummyStore from '../dummy-store';

class App extends Component {
  state = { 
    notes: [],
    folders: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600);
  }

  renderNavRoutes() {
    const {notes, folders} = this.state;
    return (
      <div>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => (
              <NoteListNav
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <NotePageNav {...routeProps} folder={folder}/>;
          }}
        />
      </div>
    );
  }

  renderMainRoutes() {
    const {notes, folders} = this.state;
    return (
      <div>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const {folderId} = routeProps.match.params;
              const notesForFolder = getNotesForFolder(
                notes,
                folderId
              );
              return (
                <NoteList
                  {...routeProps}
                  notes={notesForFolder}
                />
              );
            }}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId);
            return <NotePage {...routeProps} note={note} />
          }}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        <nav className="app-nav">{this.renderNavRoutes()}</nav>
        <header className="app-header">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <main className="app-main">{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
