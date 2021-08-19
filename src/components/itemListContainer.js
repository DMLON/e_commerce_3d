import React from "react";
import "./itemListContainer.sass";


import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    
    const {category} = useParams();

    return (
        <div className="">
            <div className="container-fluid itemListContainer">
                <ItemList filterCategory={category}/>
            </div>
        </div>
    );
};

export default ItemListContainer;
