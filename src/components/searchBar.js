import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <form className={"d-flex"}>
            <input className={"form-control me-2"} type={"search"} placeholder={"Search"} aria-label={"Search"}></input>
            <button className={"btn btn-outline-success"} type={"submit"}>Search</button>
        </form>
        )
    }
}
