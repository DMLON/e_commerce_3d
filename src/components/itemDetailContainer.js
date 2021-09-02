import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { getFirestore } from "../firebaseInit"
import ItemDetail from './itemDetail';
import "./itemDetailContainer.sass"

const ItemDetailContainer = () => {
    const {itemId} = useParams();
    // Funcion para poder agarrar el json products que tiene toda la info de los productos
    // Imagenes de productos fueron obtenidas por medio de web scrapping google images
    const [item, setItem] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item_db = itemCollection.doc(itemId);

        item_db.get().then(doc=>{
            if(!doc.exists){
                console.error("Item no existe");
                return;
            }
            setItem({id:doc.id, ...doc.data()});
        })
        .catch(error=>{
            console.error("Error buscando el item",error);
        })
        .finally(()=>{
            //setLoading(false);
        });
    },[])   

    return (
        <div className="itemDetailContainer">
            {
                item && <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer
