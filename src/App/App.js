import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header';
import NoteList from '../NoteList';
import Sidebar from '../Sidebar';
import dummyStore from '../dummy-store';

class App extends Component {
  state = { 
    notes: [],
    folders: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600);
  }

  render() {
    return (
      <section className="body">
        <div className="App">
          <Header />
        </div>
        <div className='main'> 
          <Sidebar />
          <NoteList />
        </div>
      </section>
    );
  }
}

export default App;
