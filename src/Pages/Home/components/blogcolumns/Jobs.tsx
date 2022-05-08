/* eslint-disable no-unsafe-optional-chaining */
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import moment from "moment";
import { ReactComponent as EmptyNews } from "../../../../Assets/empty_news.svg";
import { JobsProp } from "./type";
import { EmptyData, Wrapper } from "./style";

const capitalizeFirstLetter = (word: string) =>
  word?.charAt(0).toUpperCase() + word?.slice(1);

function Jobs({ Recentjobs }: JobsProp) {
  return (
    <Wrapper>
      {Recentjobs.length > 0 ? (
        Recentjobs.slice(0, 3).map(({ title, company, location, created }) => (
          <Box
            mt={1}
            width="100%"
            min-height="20px"
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
                  <div className="content">
                    <p>Job Position: {capitalizeFirstLetter(title)}</p>
                    <p>Location : {capitalizeFirstLetter(location)}</p>
                    <p>Company : {capitalizeFirstLetter(company)}</p>
                    <p className="news-date-time">
                      Posted:
                      <span>{moment(created).format("LL")}</span>
                      <span>{moment(created).format("LT")}</span>
                    </p>
                  </div>
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
export default Jobs;
