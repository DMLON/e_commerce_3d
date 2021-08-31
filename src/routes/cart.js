import React, { useContext } from 'react';
import { CartContext } from "../components/cartContext";
import { Link } from 'react-router-dom';
const Cart = () => {
    const cartContext = useContext(CartContext)

    function removeItem(itemId){
        cartContext.removeItem(itemId);
    }

    function renderItems(){
        return <div className="text-center mt-4 container">
            <table className="table">
                <thead>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total Parcial</th>
                    <th></th>
                </thead>
                <tbody>
                    {cartContext.cart.map(itemQuantity =>(
                    <tr>
                        <td><img style={{width: "100px", height:"100px"}} src={itemQuantity.item.thumbnail}></img></td>
                        <td>{itemQuantity.item.title}</td>
                        <td>${itemQuantity.item.price}</td>
                        <td>{itemQuantity.quantity}</td>
                        <td>${itemQuantity.quantity * itemQuantity.item.price}</td>
                        <td>
                            <button className="btn btn-danger mx-1" onClick={()=>removeItem(itemQuantity.item.id)}>X</button>
                            <Link className="btn btn-success mx-1" to={"/item/"+itemQuantity.item.id}>Editar</Link>
                        </td>
                    </tr>
                    ))}
            </tbody>
        </table>
        <p>Total: ${cartContext.getTotalPrice()}</p>
        </div>
    }

    function renderNoItems(){
        return <>
        
        <div className="text-center">
            <p className="mt-4">No hay items!</p>
            <Link className="btn btn-success" to="/">Volver al catalogo</Link>
        </div>
        </>
    }
    return (
        <div>
            {cartContext.cart.length === 0? renderNoItems(): renderItems()}
        </div>
    )
}

export default Cart
