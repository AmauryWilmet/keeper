import React from "react";

import Heading from "./components/Heading";
import Note from "./components/Note";
import Footer from "./components/Footer";
import FormNote from "./components/FormNote";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes : [
        {
          title: "note",
          content: "content"
        }
      ]
    }
  }

  createNote(title, content) {
    let newNotes = this.state.notes;
    newNotes.push({title: title, content: content});
    this.setState({notes: newNotes});
  }

  deleteNote(note) {
    let indexCurrentNote = this.state.notes.findIndex(item => item.title === note.title && item.content === note.content);
    let newNotes = this.state.notes;
    newNotes.splice(indexCurrentNote, 1);
    this.setState({notes: newNotes});
  }

  render() {
    return (
      <div>
        <Heading />
        <div className="container-fluid">
          <FormNote createNoteHandler={this.createNote.bind(this)} />
          <div className="row">
            {this.state.notes.map((note) => 
              <Note title={note.title} content={note.content} id={note.id} deleteNoteHandler={this.deleteNote.bind(this)} />)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;