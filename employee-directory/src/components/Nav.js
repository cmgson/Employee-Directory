import React from 'react';
import SearchBox from "./SearchBox.js";
//component styles the nav and passes the search handler into the searchbox component
function Nav({ searchHandler }) {
    return (
        <div className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" id="navbarNav">
                <SearchBox searchHandler={searchHandler} />
            </div>
        </div>
    )
}

export default Nav;