import React from "react";
import Marketbtn from "../CommonComponents/Marketbtn";

function FeedsButton() {
  return (
    <div>
      <div className="filterbox">
        <div>
          <Marketbtn title="Liquid Fertilizer" />
        </div>
        <div>
          <Marketbtn title="Compound Fertilizer" />
        </div>
      </div>
    </div>
  );
}

export default FeedsButton;
