import React from 'react'
//import './footer.css'
//import {Link} from "react-router-dom";
export const Footer = () => {
    let footerStyle={
        position: "flex", 
        bottom: "0%",
        width: "100%",
        border: "2px solid red",
    }
    return (
        <footer className="bg-dark text-light text-center" style={footerStyle}>
            copyright &copy; mytodos.com
        </footer>
    )
}

//paila rfc ane ailay aysma chai rafc hai