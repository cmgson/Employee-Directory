import React from 'react';

function SearchBox({ searchHandler }) {
    return (
        <div className='searchbox'>
            <form className='form-inline'>
                <input
                className='form-control'
                type='search'
                placeholder='Search'
                inChange={e => searchHandler(e)} />
            </form>
        </div>
    )
}

export default SearchBox;