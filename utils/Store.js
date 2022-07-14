import { createContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
export const Store = createContext();

const initialState = {
    cart: Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : {cartItems: []},
    address: {
        name: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        district: '',
        street: '',
        houseNumber: ''
    }
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
            const cartItems = state.cart.cartItems.filter(
                item => item._id !== action.payload
            )
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems}))
            return {...state, cart: {...state.cart, cartItems}}
        }

        case 'INCREASE_QUANTITY': {
            const id = action.payload;
            const cartItems = state.cart.cartItems.map(
                item => item._id === id ? {...item, qty: item.qty+1} : item
            );
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems}));
            return {...state, cart: {...state.cart, cartItems}}
        }

        case 'DECREASE_QUANTITY': {
            const id = action.payload;
            const selectedItem = state.cart.cartItems.find(item => item._id === id);
            if(selectedItem.qty === 1) {
                return state
            };
            const cartItems = state.cart.cartItems.map(
                item => item === selectedItem ? {...item, qty: item.qty-1} : item
            );
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems}));
            return {...state, cart: {...state.cart, cartItems}}
        }

        case 'RESET_CART': {
            return {
                ...state,
                cart: {
                  cartItems: []
                }
            };
        }

        case 'SET_NAME': {
            return {
                ...state,
                address: {
                    ...state.address,
                    name: action.payload
                }
            }
        }

        case 'SET_PHONE': {
            return {
                ...state,
                address: {
                    ...state.address,
                    phone: action.payload
                }
            }
        }

        case 'SET_EMAIL': {
            return {
                ...state,
                address: {
                    ...state.address,
                    email: action.payload
                }
            }
        }

        case 'SET_COUNTRY': {
            return {
                ...state,
                address: {
                    ...state.address,
                    country: action.payload
                }
            }
        }

        case 'SET_CITY': {
            return {
                ...state,
                address: {
                    ...state.address,
                    city: action.payload
                }
            }
        }

        case 'SET_DISTRICT': {
            return {
                ...state,
                address: {
                    ...state.address,
                    district: action.payload
                }
            }
        }

        case 'SET_STREET': {
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
            }
        }

        case 'SET_HOUSE_NUMBER': {
            return {
                ...state,
                address: {
                    ...state.address,
                    houseNumber: action.payload
                }
            }
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
