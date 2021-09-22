import React from 'react'

const SearchBar = () => {
    return (
        <div className={"d-flex"}>
            <input className={"form-control me-2"} type={"search"} placeholder={"Search"} aria-label={"Search"}></input>
            <button className={"btn btn-outline-success"} type={"submit"}>Search</button>
        </div>
    )
}

export default SearchBar;