/* eslint-disable no-unsafe-optional-chaining */
import React from "react";
import { useNavigate } from "react-router";
import { Box, Button, Card, CardContent } from "@mui/material";
import moment from "moment";
import { RequestCardDiv, RequestWrapper } from "./style";
import buyerRequest from "../../../../Storage/BuyersRequest";

const capitalizeFirstLetter = (word: string) =>
  word?.charAt(0).toUpperCase() + word?.slice(1);

function BuyerRequest() {
  const navigate = useNavigate();
  return (
    <RequestWrapper>
      <div className="box">
        <h1 className="wrapper-title">Buyer's Request</h1>
        <RequestCardDiv>
          <div className="wrapperbox">
            {buyerRequest.slice(0, 4).map(latest => {
              return (
                <Box
                  className="mediabox"
                  width="220px"
                  min-height="80px"
                  marginRight="12px"
                  key={latest.id}
                >
                  <Card>
                    <CardContent>
                      <div className="text-container">
                        <p>
                          <b>I need</b> {capitalizeFirstLetter(latest.title)}
                        </p>
                        <p className="request-description">
                          {capitalizeFirstLetter(latest.description)}
                        </p>
                        <div className="timelocation">
                          <span>{moment(latest.created).format("L")}</span>
                          <span>{moment(latest.created).format("LT")}</span>
                        </div>
                        <p className="request-location">{latest.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </div>
        </RequestCardDiv>
        <Box textAlign="center" marginTop={2}>
          <Button
            size="large"
            variant="outlined"
            onClick={() => navigate("/RequestPlace")}
          >
            Request-center
          </Button>
        </Box>
      </div>
    </RequestWrapper>
  );
}

export default BuyerRequest;
