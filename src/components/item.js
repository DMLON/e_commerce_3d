import React from "react";
import ItemCount from "./itemCount";
import './item.sass'
import { NavLink } from "react-router-dom";

const Item = (props) => {

    return (
            <div className="product card">
                <NavLink className="product-link" to={`/item/${props.id}`}>
                    <img className="card-img-top product-img" alt={props.itemName} src={`/${props.thumbnail}`}></img>
                </NavLink>
                <div className="card-body w-100">
                    <NavLink className="product-link" to={`/item/${props.id}`}>
                        <h3 className="card-title">{props.itemName}</h3>
                        <h5>${props.price}</h5> 
                    </NavLink>

                    {(props.stock <= 0) ? <h5 className="text-red">Sin stock</h5> : <></>}
                    <p className="card-text"></p>
                    <ItemCount stock={props.stock} initial={1} onAdd={(cantidad)=>console.log(`Comprando ${cantidad} ${props.itemName}...`)}></ItemCount>
                </div>
            </div>
        
    );
};
export default Item;