import React, {useState, useEffect} from 'react'
import ItemCount from "./itemCount";
import "./itemDetail.sass"

const ItemDetail = ({item}) => {

    console.log(item);
    if(item != null){
        return (
            <div className="productDetail card">
                <img className="card-img-top product-img" alt={item.itemName} src={`/${item.thumbnail}`}></img>
                <div className="card-body w-100">
                    <h3 className="card-title">{item.itemName}</h3>
                    <h5>${item.price}</h5> 
                    {(item.stock <= 0) ? <h5 className="text-red">Sin stock</h5> : <></>}
                    <h6 className="card-text">Categoria: {item.category}</h6>
                    <p className="card-text">{item.description}</p>
                    <ItemCount stock={item.stock} initial={1} onAdd={(cantidad)=>console.log(`Comprando ${cantidad} ${item.itemName}...`)}></ItemCount>
                </div>
            </div>
        )
    }
    else{
        return <div>
            Loading
        </div>
    }
}

export default ItemDetail
