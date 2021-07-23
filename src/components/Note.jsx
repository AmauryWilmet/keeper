import React from "react";

import "../styles.css";

import DeleteIcon from '@material-ui/icons/Delete';
import Delete from "@material-ui/icons/Delete";

function Note(props) {
    let deleteNote = (event) => {
        let title = event.target.parentNode.children[0].getAttribute("value");
        let content = event.target.parentNode.children[1].getAttribute("value");
        props.deleteNoteHandler({title:title, content:content});
    }

    return (
        <div className="col-md-4 col-lg-2">
            <div className="card container-fluid" value={props.id}>
                <p className="note-title" value={props.title}>{props.title}</p>
                <p className="note-content" value={props.content}>{props.content}</p>
                <DeleteIcon onClick={deleteNote} className="delete-note" />
            </div>
        </div>
    );
}

export default Note;