import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Employee Directory</h1>
                <p>Sortable by name, phone number and email</p>
            </div>
        )
    }
}

export default Header;