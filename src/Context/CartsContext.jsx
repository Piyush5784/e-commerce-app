import React, { createContext, useState, useContext } from "react";

const CartsContext = createContext();

export function CartsContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(item) {
        setCart([...cart, item])
    }

    function removeItems(item) {
        setCart(item);
    }

    return <>
        <CartsContext.Provider value={{ cart, addToCart, removeItems }}>
            {children}
        </CartsContext.Provider>
    </>
}

export function useData() {
    return useContext(CartsContext);
}



