import React from "react";
import FeedsButton from "./FeedFilterindex";

import { Wrapper } from "./style";

function Feed() {
  return (
    <Wrapper>
      <div className="wrapperbox">
        <h1>Available Feeds in the Market</h1>
        <FeedsButton />
      </div>
    </Wrapper>
  );
}
export default Feed;
