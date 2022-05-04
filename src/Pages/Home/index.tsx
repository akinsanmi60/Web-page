import React from "react";
import Counter from "./components/counter";
import LatestProduct from "./components/product";
import Blog from "./components/blogcolumns";
import BuyerRequest from "./components/BuyersRequest";
import { HomePageWrapper, ImageWrapper, Wrapper } from "./style";

function Home() {
  return (
    <HomePageWrapper>
      <ImageWrapper />

      <Wrapper>
        <div className="sideA">
          <Counter />
          <LatestProduct />
          <BuyerRequest />
        </div>

        <div className="sideB">
          <Blog />
        </div>
      </Wrapper>
    </HomePageWrapper>
  );
}

export default Home;
