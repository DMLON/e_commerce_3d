import React, { useState } from 'react'


const CartContext = React.createContext();

export const CartProvider = ({defaultValue = [], children}) => {
    const [cart, setCart] = useState(defaultValue);

    const addItem = (item,quantity) =>{
        if(isInCart(item && item.id)){
            // Incremento por la cantidad
            const indexItem = cart.indexOf(itemQuantity=>itemQuantity.item.id === item.id);
            cart[indexItem].quantity += quantity;
        }
        // Agrego el item al cart
        setCart([...cart,{item:item,quantity:quantity}]);
    }

    const isInCart = (itemId) =>{
        return itemId === undefined ? undefined : getItem(itemId) !== undefined;
    }

    const removeItem = (itemId) =>{
        if(!isInCart(itemId)){
            console.log("Item not in cart");
            return;
        }

        // Filtro los que NO tengan el id
        const newCart = cart.filter(itemQuantity => itemQuantity.item.id !== itemId)
        setCart(newCart);
    }

    const clear = (item,quantity) =>{
        setCart([]);
    }

    const getItem = (itemId) => {
        return cart.find(itemQuantity=>itemQuantity.item.id === itemId);
    }

    return <CartContext.Provider value={{cart,addItem,isInCart,removeItem,clear, getItem}}>
        {children}
    </CartContext.Provider>
}
