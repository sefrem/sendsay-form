import { createStore, applyMiddleware } from "redux";
import reducerApp from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import inputValidationMiddleware from "../middleware/inputValidationMiddleware";
import filesValidationMiddleware from "../middleware/filesValidationMiddleware";

const store = createStore(
	reducerApp,
	composeWithDevTools(
		applyMiddleware(inputValidationMiddleware, filesValidationMiddleware)
	)
);

export default store;
