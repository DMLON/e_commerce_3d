import React, {useEffect, useState} from "react";
import Item from "./item";
import getData from "../helpers"


const ItemList = ({filterCategory}) => {

    // Funcion para poder agarrar el json products que tiene toda la info de los productos
    // Imagenes de productos fueron obtenidas por medio de web scrapping google images
    const [data, setData] = useState([]);
    //Hago que agarre la data del products.json al iniciar el componente
    useEffect(() => {
        setTimeout(() => 
            getData()
            .then(function (productos) {
                setData(productos)
            }),1000);
    }, []);

    return (<>
            {
                data && 
                data.length > 0 && 
                data
                .filter(el=>filterCategory == null? el : el.category==filterCategory)
                .map((product) =>
                    <Item key={product.id} id={product.id} itemName={product.title} price={product.price} thumbnail={product.thumbnail} stock={product.stock}></Item>
                )
            }
        </>
    );
};

export default ItemList;

