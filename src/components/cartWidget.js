import React, { Component } from 'react'
import "./cartWidget.sass";

export default class CartWidget extends Component {
    render() {
        return (
            <div className={"cart"}>
                <span className={"iconify"} data-icon={"mdi:cart-outline"} data-inline={"false"}></span>
            </div>
        )
    }
}
