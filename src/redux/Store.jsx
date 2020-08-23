import {compose, createStore} from "redux";
import {mainReducer} from "./MainReducer";

const store = createStore(mainReducer,compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
export default store