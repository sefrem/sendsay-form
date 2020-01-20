import { createStore, applyMiddleware } from "redux";
import reducerApp from "./rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore(reducerApp,  composeWithDevTools(applyMiddleware(thunk)))

export default store