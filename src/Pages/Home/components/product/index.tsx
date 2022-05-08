import React from "react";
import { useNavigate } from "react-router";
import { Box, Button, Card, CardContent } from "@mui/material";
import latestProduct from "../../../../Storage/Product";
import { ProductWrapper, CardDiv } from "./style";

function LatestProduct() {
  const navigate = useNavigate();
  return (
    <ProductWrapper>
      <h1 className="product-wrapper-title">Lastest Products</h1>
      <CardDiv>
        {latestProduct.slice(0, 4).map(latest => {
          return (
            <Box
              width="200px"
              min-height="250px"
              sx={{
                "&:hover": {
                  backgroundColor: "blue",
                  opacity: [0.1, 0.1, 0.8],
                },
              }}
              key={latest.title}
            >
              <Card>
                <CardContent>
                  <img src={latest.img} alt={latest.title} />
                  <div className="text-container">
                    <p>Produce: {latest.title}</p>
                    <p>Quantity: {latest.quantity}</p>
                    <p>Location: {latest.location}</p>
                  </div>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </CardDiv>
      <Box textAlign="center" marginTop={5}>
        <Button
          size="large"
          variant="outlined"
          onClick={() => navigate("/MarketPlace")}
        >
          Market
        </Button>
      </Box>
    </ProductWrapper>
  );
}

export default LatestProduct;
