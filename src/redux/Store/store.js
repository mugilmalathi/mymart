import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducer/rootReducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(rootReducer, enhancer);

export default store;