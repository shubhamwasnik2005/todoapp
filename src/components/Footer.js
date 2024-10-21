import React from "react";

const year = new Date();
function Footer(){
    return <footer>
        <p>copywirte {year.getFullYear()}</p>

    </footer>

};


export default Footer;