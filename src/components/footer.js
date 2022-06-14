import React from "react";
import { HeaderContext } from "../context";
import { useContext } from "react";

function Footer() {  
  return (
    <footer className="footer">
      <p className="p">© Paklin inc. 2022</p>
      <a className="link" href="https://github.com/FatnomWin5" >Github создателя</a>
    </footer>
    );
}

export default Footer; 