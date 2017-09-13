import React, { Component } from 'react';

export class Note extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('notes') !== null) {
      this.state = {
        noteArray : localStorage.getItem('notes').split(',')
      };
    } else {
      this.state = {
        noteArray : []
      };
    }

    this.onClickSave = this.onClickSave.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickSave() {
    const note = document.getElementById('note-text').value;
    if(note !== '') {
      if (localStorage.getItem('notes') === null) {
        this.state.noteArray.push(note);
        localStorage.setItem('notes', this.state.noteArray);
        document.getElementById('note-text').value = '';
      } else {
        this.notes = localStorage.getItem('notes').split(',');
        this.state.noteArray.push(note);
        localStorage.setItem('notes', this.state.noteArray);
        document.getElementById('note-text').value = '';
      }
    }

    this.setState({noteArray: this.state.noteArray});
  }

  onClickDelete() {
    if (localStorage.getItem('notes') !== null) {
      localStorage.removeItem('notes');
      this.setState({noteArray: []});
    }
  }

  render() {
    let noteArray = this.state.noteArray;
    let notification = null;
    let deleteNotes = null;
    if(noteArray.length === 0) {
      notification = (
        <div className="col m12">
          <h6 className="center">You have no notes yet. Your notes will be displayed here when you create them.</h6>
        </div>
      );
    } else {
      deleteNotes = (
        <div className="col m3 offset-m9">
          <a
            href="#"
            className="right"
            style={{'color': '#d50000'}}
            onClick={this.onClickDelete}
          ><i className="material-icons delete-icon">delete_sweep</i></a>
        </div>
      );
    }

    return(
      <div className="row">
        <div className="space" />
        <div className="col m6 offset-m3 input-field">
          <input type="text" id="note-text" placeholder="Type note here" />
          <a
            name="button"
            className="waves-effect waves-light btn save-btn right"
            onClick={this.onClickSave}
          >Save</a>
        </div>

        {notification}
        { deleteNotes }

        {noteArray.map((note, index) => (
          <div className="col m4" key={index}>
            <p className="note-card">{note}</p>
          </div>
        ))}
      </div>
    );
  }
}
