import React from "react";
import './Header.css';

const Header = ({user}) => {
    const {name, status } = user;
    return(
        <header className="Header">
            <h1 className="Header__name">Greate {name}</h1>
            <h1 className="Header__status">{status}</h1>
        </header>
    )
}

export default Header;