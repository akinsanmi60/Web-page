/* eslint-disable no-unsafe-optional-chaining */
import React from "react";
import moment from "moment";
import { Typography } from "@mui/material";
import { ReactComponent as EmptyNews } from "../../../../../Assets/empty_news.svg";
import { NewsProp } from "../type";
import { EmptyData, LatestWrapper } from "./style";

const capitalizeFirstLetter = (word: string) =>
  word?.charAt(0).toUpperCase() + word?.slice(1);

function News({ Recentnews }: NewsProp) {
  return (
    <LatestWrapper>
      <div className="recentbox">
        {Recentnews.length > 0 ? (
          Recentnews.slice(0, 3).map(({ title, image, created }) => (
            <div className="latestbox" key={title}>
              <div className="boxcard">
                <div className="news-item">
                  <img src={image} alt="" className="news-item-img" />
                </div>
                <div className="description-content">
                  <div className="content">
                    <h1>{capitalizeFirstLetter(title)}</h1>
                    <div className="news-date-time">
                      <span>{moment(created).format("L")}</span>
                      <span>{moment(created).format("LT")}</span>
                    </div>
                  </div>
                  <p>
                    <span
                      role="button"
                      tabIndex={0}
                      style={{
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "#333333",
                      }}
                    >
                      ... read more
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <EmptyData>
            <EmptyNews />
            <Typography>Oops!, No news to display</Typography>
          </EmptyData>
        )}
      </div>
    </LatestWrapper>
  );
}
export default News;
