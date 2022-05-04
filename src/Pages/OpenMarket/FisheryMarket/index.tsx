import React from "react";
import FishButton from "./FishFilterindex";

import { Wrapper } from "./style";

function Fishing() {
  return (
    <Wrapper>
      <div className="wrapperbox">
        <h1>Available Fish in the Market</h1>
        <FishButton />
      </div>
    </Wrapper>
  );
}
export default Fishing;
