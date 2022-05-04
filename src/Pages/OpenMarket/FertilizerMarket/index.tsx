import React from "react";
import FeedsButton from "./FertFilterindex";

import { Wrapper } from "./style";

function Fertilizers() {
  return (
    <Wrapper>
      <div className="wrapperbox">
        <h1>Available Fertilizers in the Market</h1>
        <FeedsButton />
      </div>
    </Wrapper>
  );
}
export default Fertilizers;
