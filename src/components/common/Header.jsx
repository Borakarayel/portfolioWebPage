import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { navlink } from "../data/dummydata";
import logo from "../data/images/loggo.png";
import React, { useState } from "react";
import { Menu } from "@mui/icons-material";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <header>
      <div className="container flexsb">
        <div className="logo">
          <img
            src={logo}
            alt="logo image"
            style={{ width: "10vh", height: "10vh" }}
          />
        </div>
        <div className={responsive ? "hideMenu" : "nav"}>
          {navlink.map((links, i) => (
            <Link to={links.url} key={i}>
              {links.text}
            </Link>
          ))}
        </div>
        <button className="toggle" onClick={() => setResponsive(!responsive)}>
          <Menu className="icon"></Menu>
        </button>
      </div>
    </header>
  );
};

//9:46
