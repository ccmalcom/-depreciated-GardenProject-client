import React from 'react';
import {useHistory} from 'react-router-dom';

const SearchBar = (props) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${props.searchQuery}`);
        e.preventDefault();
    };

    return (
        <form action="/" method="get" autoComplete="off" onSubmit={props.fetchPlants}>
            <input type="text" value={props.searchQuery} onInput={(e) => props.setSearchQuery(e.target.value)} id="header-search" placeholder="Search Plants" name="s"/>
            <button type="submit">Submit</button>
        </form>
    )
}


export default SearchBar;