import React, { useState } from "react";
import ItemCount from "./itemCount";
import './item.sass'
import { NavLink } from "react-router-dom";



const Item = ({item, onAddCallback}) => {
    const [addedQuantity, setAddedQuantity] = useState(0);
    const [added, setAdded] = useState(false)
    const onAdd = (cantidad)=>{
        setAddedQuantity(cantidad);
        if(onAddCallback) onAddCallback(item,cantidad);
    }
    
    return (
            <div className="product card">
                <NavLink className="product-link" to={`/item/${item.id}`}>
                    <img className="card-img-top product-img" alt={item.title} src={`/${item.thumbnail}`}></img>
                </NavLink>
                <div className="card-body w-100">
                    <NavLink className="product-link" to={`/item/${item.id}`}>
                        <h3 className="card-title">{item.title}</h3>
                        <h5>${item.price}</h5> 
                    </NavLink>

                    {(item.stock <= 0) ? <h5 className="text-red">Sin stock</h5> : <></>}
                    <p className="card-text"></p>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount>
                </div>
            </div>
        
    );
};
export default Item;