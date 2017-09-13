import React from 'react';

export class NavigationBar extends React.Component {
  render() {
    return(
      <nav className="nav theme-background">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" id="navbar-title">NoteIt</a>
        </div>
      </nav>
    );
  }
}
