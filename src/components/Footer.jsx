import React from "react";

let nowYear = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright &copy; {nowYear}</p>
        </footer>
    );
}

export default Footer;