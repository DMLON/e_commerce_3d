import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from "./itemCount";
import "./itemDetail.sass"

const ItemDetail = ({item}) => {
    const [addedQuantity, setAddedQuantity] = useState(0);

    const onAdd = (cantidad)=>{
        setAddedQuantity(cantidad);
    }
    
    /**
    * Conditional rendering of the ItemCount component or Link to end purshase depending on addedQuantity
    **/
    const renderPurchase= ()=>{
        if(addedQuantity==0){
            return <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount>
        }
        else{
            return (
            <div className="text-center">
                <Link className="btn btn-success" to="/cart">Terminar Compra</Link>
            </div>
            );
        }
    }

    if(item != null){
        return (
            <div className="productDetail card">
                <img className="card-img-top product-img" alt={item.title} src={`/${item.thumbnail}`}></img>
                <div className="card-body w-100">
                    <h3 className="card-title">{item.title}</h3>
                    <h5>${item.price}</h5> 
                    {(item.stock <= 0) ? <h5 className="text-red">Sin stock</h5> : <></>}
                    <h6 className="card-text">Categoria: {item.category}</h6>
                    <p className="card-text">{item.description}</p>
                    {
                        renderPurchase()
                    }
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
