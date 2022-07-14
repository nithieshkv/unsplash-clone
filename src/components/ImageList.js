import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RequestSuccess, Selected, Next, Fetch, Like ,Loading} from "../actions";
import { FavoriteBorder, FavoriteOutlined } from "@material-ui/icons";
import ImageDescription from "./ImageDescription";
import { nextPage } from "../actionTypes";
import loader from "../images/loader.gif";
import Skeleton from '@mui/material/Skeleton';

import '../main.css'

const ImageList = ({
  data,
  like,
  next,
  likedData,
  imagelist,
  categoryValue,
  nextPage,
  Selected,
  selectedImage,
  searchValue,
  loader,
  loading
}) => {
  const [click, setClick] = useState(false);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    data({ search: "", category: "", next: nextPage });
    next(1);
  }, []);
  useEffect(() => {
    next(1);
    Selected({});
  }, [searchValue, categoryValue]);
  useEffect(() => {
    // loading();

    data({ search: searchValue, category: categoryValue, next: nextPage });
    Selected({})
    window.scroll(0, 0);
  }, [nextPage]);
  const array = [];
  useEffect(() => {
    let i;
    for (i = 0; i < imagelist?.length; i++) {
      array[i] = 0;
    }
    setLiked(array);
  }, [imagelist]);

  const displayImages = imagelist?imagelist.map((x, index) => {
    return (
      <div key={index}>
        <div onClick={() => {Selected(x)

          setClick(!click);
          let ind = liked[index];
          ind = !liked[index];
          liked[index] = ind;
          setLiked([...liked]);
          like(!likedData)
          like(liked[index]?true:false)

        
        }} className="image-container">
          <img src={x.urls.small} alt={x.alt_desription} />
          <div className="like">
            <button>
              <div

                
              >
                {(liked[index] && likedData)? (
                  <div className="like-icon like">
                    <FavoriteOutlined style={{ color: "red" }} />
                    <p>Liked</p>
                  </div>
                ) : (
                  <div className="like-icon">
                    <FavoriteBorder style={{ color: "red" }} />
                    <p>Like</p>
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }):    <Skeleton variant="rectangular" width={210} height={118} />

  return (
    <div>
      {loader?<div className="loader">
          <img src="https://raw.githubusercontent.com/nithieshvetri/youtube-clone/master/src/images/loader.gif" alt="loader" />
        </div>:<><div className={selectedImage.id ? "container" : ""}>
        <div className="left-container">{displayImages}</div>

        {selectedImage.id ? (
          <div className="image-description">
            <ImageDescription data={selectedImage} like={like}liked={likedData} />{" "}
          </div>
        ) : null}
      </div>
      <div className="next-button">
        {nextPage > 1 ? (
          <button onClick={() => next(nextPage - 1)} className="buttons next">
            PREVIOUS PAGE
          </button>
        ) : null}
        
        <button onClick={() => next(nextPage + 1)} className="buttons next">
          NEXT PAGE
        </button>
      </div></>
      }
    </div>
  );
};

const mapDispatchtoProp = (dispatch) => {
  return {
    data: (data) => dispatch(Fetch(data)),
    Selected: (data) => dispatch(Selected(data)),
    next: (next) => dispatch(Next(next)),
    like:(like)=>dispatch(Like(like)),
    loading:()=>dispatch(Loading())
  };
};
const mapStatetoProp = (state) => {
  return {
    imagelist: state.Fetch.data,
    selectedImage: state.SelectedData.data,
    searchValue: state.SearchValue.value,
    nextPage: state.next.next,
    categoryValue: state.categoryValue.category,
    loader: state.Fetch.loading,
    likedData:state.SelectedData.liked
  };
};

export default connect(mapStatetoProp, mapDispatchtoProp)(ImageList);
