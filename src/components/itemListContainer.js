import React, {useEffect, useState} from "react";
import "./itemListContainer.sass";

const Item = (props) => {
    return (
        <div className="product card">
            <img className="card-img-top product-img" alt={props.itemName} src={props.thumbnail}></img>
            <div className="card-body">
                <h3 className="card-title">{props.itemName}</h3>
                <h5>${props.price}</h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary">
                    Añadir a carrito
                </a>
            </div>
        </div>
    );
};

const ItemListContainer = (props) => {

    // Funcion para poder agarrar el json products que tiene toda la info de los productos
    // Imagenes de productos fueron obtenidas por medio de web scrapping google images
    const getData = () => {
        fetch("products.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (productos) {
                setData(productos)
            });
    };
    const [data,setData]=useState([]);
    //Hago que agarre la data del products.json al iniciar el componente
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="">
            <div className="container-fluid itemListContainer">
                {
                    data && data.length > 0 && data.map((product) =>
                        <Item itemName={product.title} price={product.price} thumbnail={product.thumbnail}></Item>
                    )
                }
                
            </div>
        </div>
    );
};

export default ItemListContainer;
