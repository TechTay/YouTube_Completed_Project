import React, { useState, useEffect } from 'react';


const SearchBar = (props) => {

    const [search, setSearch] = useState([''])

    function handleSubmit(event) {
        event.preventDefault();
       props.setSearch(search)
    }
    return (
        <form onSubmit={handleSubmit} className='search'>
            <button type='submit'className='btn btn-primary' style={{'marginTop': '0.1em', 'marginRight': '0.7em'}}>Search Videos</button>
    <input type='text' className='SearchBar' value={search} onChange={(event) => setSearch(event.target.value)}/>
    </form>
        )

    }

    export default SearchBar