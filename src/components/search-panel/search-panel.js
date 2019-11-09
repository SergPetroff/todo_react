import React from 'react';

import './search-panel.css'
const SearchPanel = ()=>{
    const searchText = "Введите текст";
    const  searchStyle = {
        fontSize:'20px'
    }
    return (
        <input type="text"
        placeholder={searchText}
        style={searchStyle}/>
    );
};

export default SearchPanel