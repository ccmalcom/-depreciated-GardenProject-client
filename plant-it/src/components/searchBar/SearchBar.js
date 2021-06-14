import React from 'react';
import Search from './Search';
import {useHistory} from 'react-router-dom';

const SearchBar = ({searchQuery, setSearchQuery}) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
            <input type="text" value={searchQuery} onInput={(e) => setSearchQuery(e.target.value)} id="header-search" placeholder="Search Plants" name="s"/>
            <button type="submit">Submit</button>
        </form>
    )
}


export default SearchBar;