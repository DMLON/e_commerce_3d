import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import getData from "../helpers"
import ItemDetail from './itemDetail';
import "./itemDetailContainer.sass"

const ItemDetailContainer = () => {
    const {itemId} = useParams();
    // Funcion para poder agarrar el json products que tiene toda la info de los productos
    // Imagenes de productos fueron obtenidas por medio de web scrapping google images
    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);

    useEffect(() => {
        setTimeout(() => 
        getData()
        .then(function (productos) {
            console.log(productos);
            setData(productos)
        }),200);
    },[])

    // Esta seria la idea en realidad, cuando cambie itemID o data, que actualize el item
    // El problema es que si actualiza itemId antes que data, no funciona, ahi es donde entra el use effect
    // Del on Mount, así obtiene la información
    // Mi idea originalmente es que se guarde en memoria (data) y que solo cambie con el filter teniendo a data en memoria, pero
    // No estaba seguro de como funcionaria eso porque al cambiar el route siempre actualiza el itemDetailContainer y llama el on mount
    useEffect(() => {
        setItem(data.filter(el=>el.id == itemId));
    },[itemId, data])

    return (
        <div className="itemDetailContainer">
            {
                item && <ItemDetail item={item[0]}/>
            }
        </div>
    )
}

export default ItemDetailContainer
