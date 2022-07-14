import React, { useState, useEffect } from "react";
import { FavoriteBorder, FavoriteOutlined } from "@material-ui/icons";

const ImageDescription = ({ data, liked, like }) => {
  return (
    <div className="description">
      <div className="fullimage">
        <img src={data.urls?.full} alt={data.alt_description} />
        <div className="image-like">
          <button>
            <div
              data-testid="like-click"
              onClick={() => {
                console.log("aaa", data.likes);
                like(!liked);
              }}
            >
              {liked ? (
                <div className="like-icon like">
                  <FavoriteOutlined style={{ color: "red" }} />
                  <p>{data.likes + 1} </p>
                </div>
              ) : (
                <div className="like-icon like">
                  <FavoriteBorder style={{ color: "red" }} />
                  <p >{data.likes}</p>
                </div>
              )}
            </div>
          </button>
        </div>
      </div>

      <div className="image-decription-card">
        {data.sponsorship?.tagline ? (
          <h1>{data.sponsorship?.tagline}</h1>
        ) : null}
        {data.alt_description ? (
          <p>DESCRIPTION :&nbsp;{data.alt_description}</p>
        ) : null}
        {data.user?.name ? <p>SPONSOR USER NAME: {data.user?.name} </p> : null}
        <p data-testid="likeText">TOTAL LIKES :{(liked && data.likes + 1) || data.likes}</p>
        {data.sponsorship?.sponsor?.bio ? (
          <p>BIO: {data.sponsorship?.sponsor?.bio}</p>
        ) : null}
      </div>
    </div>
  );
};

export default ImageDescription;
