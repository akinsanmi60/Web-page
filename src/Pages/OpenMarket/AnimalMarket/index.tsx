import React from "react";
import FilteringButton from "./AnimalFilterindex";

import { Wrapper } from "./style";

function Animals() {
  return (
    <Wrapper>
      <div className="wrapperbox">
        <h1>Available Animals in the Market</h1>
        <FilteringButton />
      </div>
    </Wrapper>
  );
}
export default Animals;
