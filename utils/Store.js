import { createContext, useReducer } from "react";
import Cookies from "js-cookie";
export const Store = createContext();

const initialState = {
    cart: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : {cartItems: []},
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(
                item => item._id === newItem._id
            );
            const cartItems = existItem ? state.cart.cartItems.map(
                item => item._id === existItem._id ? {...item, qty: item.qty + 1} : item
            ) : [...state.cart.cartItems, {...newItem, qty: 1}];
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems}))
            return {...state, cart: {...state.cart, cartItems}}
        }
        case 'REMOVE_FROM_CART': {

        }
        default: 
        return state;
    }
}

export function StoreProvider ({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch};
    return <Store.Provider value={value}>{children}</Store.Provider>
}
