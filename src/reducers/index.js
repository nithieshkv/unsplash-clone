import { combineReducers } from "redux";
import {
  selectedImage,
  Search,
  Success,
  Failure,
  nextPage,
  Category,
  like,
  loading
} from "../actionTypes";
const initialState = { data: [], loading: true, error: "" };
const Fetch = (state = initialState, action) => {
  switch (action.type) {
    case Success:
      return { ...state, loading: false, data: action.payload };
    case Failure:
      case loading:
        return {loding:true}
      return { ...state, loading: true, error: action.payload };
    default:
      return state;
  }
};
const initialSelected = { data: {} ,liked:false};
const SelectedData = (state = initialSelected, action) => {
  switch (action.type) {
    case selectedImage:
      return { ...state,data: action.payload };
      case like:
        return {...state,liked:action.payload}
    default:
      return state;
  }
};
const initialSearch = { value: "" };

const SearchValue = (state = initialSearch, action) => {
  switch (action.type) {
    case Search:
      return { value: action.payload };

    default:
      return state;
  }
};
const next = (state = { next: 1 }, action) => {
  switch (action.type) {
    case nextPage:
      return { next: action.payload };
    default:
      return state;
  }
};

const categoryValue = (state = { category: "" }, action) => {
  switch (action.type) {
    case Category:
      return { category: action.payload };
    default:
      return state;
  }
};

export const RootReducer = combineReducers({
  Fetch,
  SelectedData,
  SearchValue,
  next,
  categoryValue,
});
