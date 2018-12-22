import React, { Component } from 'react';

function SearchBar(props){
    return(
        <div>
            <input value={props.value} onChange={props.handleInputChange}></input>
            <button value="add" onClick={props.addTask}>OK</button>
        </div>
    );
}

export default SearchBar;