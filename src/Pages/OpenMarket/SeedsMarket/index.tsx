import React from "react";
import SeedsButton from "./Seedfilterindex";

import { Wrapper } from "./style";

function Seddling() {
  return (
    <Wrapper>
      <div className="wrapperbox">
        <h1>Available Seeds in the Market</h1>
        <SeedsButton />
      </div>
    </Wrapper>
  );
}
export default Seddling;
