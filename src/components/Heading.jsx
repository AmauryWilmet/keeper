import React from "react";

import HighlightIcon from '@material-ui/icons/Highlight';

import "../styles.css";

function Heading() {
    return (
        <header>
            <HighlightIcon id="highlight-icon" />
            <h1>Keeper</h1>
        </header>
    );
}

export default Heading;