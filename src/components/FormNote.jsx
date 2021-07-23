import React from "react";

import "../styles.css";

import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import AddBoxIcon from '@material-ui/icons/AddBox';

class ReactForm extends React.Component {

    constructor() {
        super();
        this.state = {
            titleNote: "",
            contentNote: "",
            extended: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.createNote = this.createNote.bind(this);
        this.changeExtended = this.changeExtended.bind(this);
    }

    handleChange(event) {
        let nameTarget = event.target.name;
        if (nameTarget === "title") {
            console.log("ok");
            this.setState({titleNote: event.target.value});
        } else if (nameTarget === "content") {
            this.setState({contentNote: event.target.value});
        }
    }

    createNote() {
        this.props.createNoteHandler(this.state.titleNote, this.state.contentNote);
    }

    changeExtended() {
        this.setState({extended: true});
    }

    render() {
        return (
            <div id="form-note" className="container">
                {this.state.extended && (<input onChange={this.handleChange} className="form-control" placeholder="Title" name="title"/>
                )}
                <textarea onClick={this.changeExtended} onChange={this.handleChange} className="form-control" placeholder="Take a note..." name="content" rows={this.state.extended ? "3" : "1"}></textarea>
                <Slide direction="up" in={this.state.extended}>
                    <Fab id="button-add" onClick={this.createNote}>
                        <AddBoxIcon />
                    </Fab>
                </Slide> 
            </div>
        )
    }
}

export default ReactForm;