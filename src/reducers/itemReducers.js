export function itemReducer(
  state = { items: [{ id: 11, name: "item 11", price:"350", description: "Lorem Ipsum" }] },
  action
) {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, items: [...state.items] };
    case "POST_ITEM":
      return { items: [...state.items, ...action.payload] };
  }
  return state;
}
