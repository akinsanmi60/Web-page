/* eslint-disable no-unsafe-optional-chaining */
import React from "react";
import moment from "moment";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactComponent as EmptyNews } from "../../../../Assets/empty_news.svg";
import { NewsProp } from "./type";
import { EmptyData, Wrapper } from "./style";

const capitalizeFirstLetter = (word: string) =>
  word?.charAt(0).toUpperCase() + word?.slice(1);

function News({ Recentnews }: NewsProp) {
  return (
    <Wrapper>
      {Recentnews.length > 0 ? (
        Recentnews.slice(0, 3).map(({ title, description, image, created }) => (
          <Box
            mt={1}
            width="100%"
            min-height="50px"
            sx={{
              "&:hover": {
                backgroundColor: "blue",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            key={title}
          >
            <Card>
              <CardContent>
                <div className="news-item">
                  <img src={image} alt="" className="news-item-img" />
                  <div className="content">
                    <h3>{capitalizeFirstLetter(title)}</h3>
                    <p className="news-date-time">
                      <span>{moment(created).format("LL")}</span>
                      <span>{moment(created).format("LT")}</span>
                    </p>
                  </div>
                </div>
                <div className="description-content">
                  <p>
                    {`${capitalizeFirstLetter(
                      description.substring(0, 100),
                    )}...`}
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
              </CardContent>
            </Card>
          </Box>
        ))
      ) : (
        <EmptyData>
          <EmptyNews />
          <Typography>Oops!, No news to display</Typography>
        </EmptyData>
      )}
    </Wrapper>
  );
}
export default News;
