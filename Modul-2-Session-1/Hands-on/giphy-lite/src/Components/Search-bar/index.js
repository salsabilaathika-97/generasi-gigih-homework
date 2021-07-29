import React from 'react';
import axios from 'axios';

const SearchBar = ({handleSubmit}) => {
    <>
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder="Cari GIF" onChange={handleSearchInputChanges} value ={searchValue}/>
            <input type = "submit" value = "search"/>
        </form>
    </>
}

export default SearchBar