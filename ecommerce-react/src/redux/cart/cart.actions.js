import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
}) // Ovde nam ne treba payload, zato sto u reducer radimo !hidden function 

