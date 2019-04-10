import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";

import { addToCart } from "./src/actions/cartActions";
import { postItem } from "./src/actions/itemActions";
import reducer from "./src/reducers/rootReducer";
import App from "./src/app";

const middeware = applyMiddleware(logger);
const store = createStore(reducer, middeware);

store.dispatch(
  addToCart([{ id: 1, name: "item 1", price:"100", description: "lorem ipsum" }])
);
store.dispatch(
  postItem([{ id: 1, name: "item 1",price:"200", description: "lorem ipsum" }])
);
store.dispatch(
  postItem([{ id: 2, name: "item 2", price:"230", description: "lorem ipsum" }])
);

store.dispatch(
  postItem([{ id: 3, name: "item 3",  price:"550", description: "lorem ipsum" }])
);
store.dispatch(
  postItem([{ id: 4, name: "item 4", price :"1200",description: "lorem ipsum" }])
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
module.hot.accept();
