import React, { Component } from 'react';
import Folder from './Folder';

export default class Sidebar extends Component {
  render() {
    const folders = this.props.folders.map(folder => <Folder folder={folder}/>)
    return (
      <div>
        {folders}
      </div>
    );
  }
} 