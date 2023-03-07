import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
}) // Ovde nam ne treba payload, zato sto u reducer radimo !hidden function 

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item 
})
