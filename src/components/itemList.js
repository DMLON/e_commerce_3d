import React, {useEffect, useState} from "react";
import Item from "./item";

const ItemList = (props) => {

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
    const [data, setData] = useState([]);
    //Hago que agarre la data del products.json al iniciar el componente
    useEffect(() => {
        setTimeout(() => getData(),1000);
    }, []);

    return (<>
            {
                data && data.length > 0 && data.map((product) =>
                    <Item key={product.id} itemName={product.title} price={product.price} thumbnail={product.thumbnail} stock={product.stock}></Item>
                )
            }
        </>
    );
};

export default ItemList;

