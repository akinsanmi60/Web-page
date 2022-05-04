import React from "react";
import PoultryButton from "./PouFilterindex";

import { Wrapper } from "./style";

function Birds() {
  return (
    <Wrapper>
      <div className="wrapperbox">
        <h1>Available Birds in the Market</h1>
        <PoultryButton />
      </div>
    </Wrapper>
  );
}
export default Birds;
