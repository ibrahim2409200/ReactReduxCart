import { combineReducers } from "redux";
import { productReducer ,selectedProductReduser} from "./productReducer";

const reducer = combineReducers({
    allProducts:productReducer,
    product:selectedProductReduser
});

export default reducer;