import * as cartActions from "./actionTypes";
export function addToCart(item) {
    return { 
        type: cartActions.ADD_TO_CART, 
        payload:item 
    }
}
  