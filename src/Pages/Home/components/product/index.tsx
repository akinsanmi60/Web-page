import React from "react";
import { useNavigate } from "react-router";
import { Box, Button, Card, CardContent } from "@mui/material";
import latestProduct from "../../../../Storage/Product";
import { ProductWrapper, CardDiv } from "./style";

function LatestProduct() {
  const navigate = useNavigate();
  return (
    <ProductWrapper>
      <div className="box">
        <h1 className="product-wrapper-title">Lastest Products</h1>
        <CardDiv>
          <div className="wrapperbox">
            {latestProduct.slice(0, 4).map(latest => {
              return (
                <Box
                  className="mediabox"
                  width="210px"
                  min-height="250px"
                  key={latest.title}
                >
                  <Card>
                    <CardContent>
                      <div className="cardbox">
                        <img src={latest.img} alt={latest.title} />
                        <div className="text-container">
                          <p>Produce: {latest.title}</p>
                          <p>Quantity: {latest.quantity}</p>
                          <p>Location: {latest.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </div>
        </CardDiv>
        <Box textAlign="center" marginTop={2}>
          <Button
            size="large"
            variant="outlined"
            onClick={() => navigate("/MarketPlace")}
          >
            Market
          </Button>
        </Box>
      </div>
    </ProductWrapper>
  );
}

export default LatestProduct;
