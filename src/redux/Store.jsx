import {compose, createStore} from "redux";
import {reducer} from "./Reducer";


const store = createStore(reducer,compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
export default store