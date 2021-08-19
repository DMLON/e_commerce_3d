import React from "react";
import ItemCount from "./itemCount";
import './item.sass'

const Item = (props) => {

    return (
        <div className="product card">
            <img className="card-img-top product-img" alt={props.itemName} src={props.thumbnail}></img>
            <div className="card-body w-100">
                <h3 className="card-title">{props.itemName}</h3>
                <h5>${props.price}</h5> 
                {(props.stock <= 0) ? <h5 className="text-red">Sin stock</h5> : <></>}
                <p className="card-text"></p>
                <ItemCount stock={props.stock} initial={1} onAdd={(cantidad)=>console.log(`Comprando ${cantidad} ${props.itemName}...`)}></ItemCount>
            </div>
        </div>
    );
};
export default Item;