import React from 'react';
import SearchBox from "./SearchBox.js";

function Nav({ searchHandler }) {
    return (
        <Nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navbarNav">
                <SearchBox searchHandler={searchHandler} />
            </div>
        </Nav>
    )
}

export default Nav;