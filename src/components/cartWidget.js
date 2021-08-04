import React, { Component } from 'react'
import "./cartWidget.sass";

export default class CartWidget extends Component {
    constructor(props){
        super(props);
        this.state = {cartElements: 1}
    }
    
    render() {
        return (
            <div className={"cart"}>
                <span className={"iconify"} data-icon={"mdi:cart-outline"} data-inline={"false"}></span>
                <span>{this.state.cartElements} elemento{this.state.cartElements === 1 ? "":"s"}</span>
            </div>
        )
    }
}
