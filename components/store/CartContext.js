import { createContext, useState } from "react";


const CartContext = createContext(undefined);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const cartHandler = (value) => {
        setCart(prev => {
            return [
                ...prev,
                value
            ]
        })
    }

    const cartValue = {
        cart,
        setCart,
        cartHandler
    }
  
    return (
        <CartContext.Provider 
            value={cartValue}
        >
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider, CartContext };
