import { createSelector } from "reselect";

//Selectori rade nesto na delu state-a

const selectCart = state => state.cart; // Returns only piece of state

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,item) => acc + item.quantity , 0)   
);