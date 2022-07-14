import axios from "axios";
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

export const RequestSuccess = (data) => {
  return {
    type: Success,
    payload: data,
  };
};
export const RequestFailed = (data) => {
  return { type: Failure, payload: data };
};

export const Input = (data) => {
  return {
    type: Search,
    payload: data,
  };
};
export const category = (data) => {
  return {
    type: Category,
    payload: data,
  };
};
export const Loading=()=>{
  return {
    type:loading
  }
}
export const Fetch = (data) => {
  const { search, category, next } = data;
  return (dispatch) => {
    RequestSuccess([])
    if (search) {
      axios
        .get(
          `${process.env.REACT_APP_SEARCH_URL}page=${
            next ? next : 1
          }&per_page=16&query=${search}&order_by=${category}&client_id=${
            process.env.REACT_APP_APIKEY
          }`
        )
        .then((res) => {
          dispatch(RequestSuccess(res.data.results));
        })
        .catch((error) => dispatch(RequestFailed(error)));
    } else {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}page=${next}&per_page=16&order_by=${category}&client_id=${process.env.REACT_APP_APIKEY}`
        )
        .then((res) => {
          dispatch(RequestSuccess(res.data));
        })
        .catch((error) => dispatch(RequestFailed(error)));
    }
    Selected({})

  };
};
export const Selected = (data) => {
  return { type: selectedImage, payload: data };
};
export const next = () => {
  return {
    type: nextPage,
    // payload:next
  };
};

export const SearchValue = (data) => {
  return (dispatch) => {
    const { search, category } = data;
    console.log(search, category);
  };
};
// export const Category=(data)

export const Next = (next) => {
  return { type: nextPage, payload: next };
};

export const Like=(data)=>{
  return {
    type:like,
    payload:data
  }
}