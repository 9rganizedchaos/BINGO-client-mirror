import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/index';
import thunk from "redux-thunk";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
  console.log("state changed!")
})
export default store;