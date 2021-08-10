import React, {useEffect, useState} from "react";
import "./itemListContainer.sass";

import ItemList from "./itemList";

const ItemListContainer = (props) => {

    return (
        <div className="">
            <div className="container-fluid itemListContainer">
                <ItemList/>
            </div>
        </div>
    );
};

export default ItemListContainer;
