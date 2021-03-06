import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Fetch, Input, category, Loading, Selected } from "../actions";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = ({ search, searchValue, category, loading, selected }) => {
  const categoryList = ["latest", "oldest", "popularity"];
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
const navigate=useNavigate();
const userRequest=()=>{
  setToggle(!toggle)
}
  useEffect(() => {
    search({ search: inputValue, category: selectedCategory, next: 1 });
    loading();
    selected({});

    searchValue(inputValue);
  }, [toggle]);
  let timer;
useEffect(()=>{
  timer=setTimeout(userRequest,3000)
  return ()=>clearTimeout(timer)
},[inputValue])
  const handler = (e) => {
    if (e.key === "Enter") {
      setToggle(!toggle);
    }
  };

  const displayCategory = categoryList.map((x, index) => {
    return (
      <div key={index}>
        <button
          data-testid="button"
          className="buttons"
          onClick={(e) => {
            setSelectedCategory(x);
            setToggle(!toggle);
            category(x);
            navigate(`/${x}`)
          }}
        >
          {x}
        </button>
      </div>
    );
  });

  return (
    <div className="header">
      <div></div>

      <div>
        {" "}
        <input
          className="search__bar"
          type="text"
          value={inputValue}
          placeholder=" Search ..."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyPress={(e) => {
            handler(e);
          }}
        />{" "}
      </div>
      <div className="button">{displayCategory}</div>
    </div>
  );
};

const mapDispatchtoPop = (dispatch) => {
  return {
    search: (data) => dispatch(Fetch(data)),
    searchValue: (input) => dispatch(Input(input)),
    category: (data) => dispatch(category(data)),
    loading: () => dispatch(Loading()),
    selected: (data) => dispatch(Selected(data)),
  };
};
export default connect(null, mapDispatchtoPop)(Search);
