import * as itemActions from "./actionTypes";

export function getItems(items) {
  return {
    type: itemActions.GET_ITEMS
  };
}
export function postItem(items) {
  return {
    type: itemActions.POST_ITEM,
    payload: items
  };
}

//delete an item

//update an item
