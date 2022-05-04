import React from "react";
import Marketbtn from "../CommonComponents/Marketbtn";

function FeedsButton() {
  return (
    <div>
      <div className="filterbox">
        <div>
          <Marketbtn title="Cow Feed" />
        </div>
        <div>
          <Marketbtn title="Ram Feed" />
        </div>
        <div>
          <Marketbtn title="Poultry Feed" />
        </div>
        <div>
          <Marketbtn title="Pig Feed" />
        </div>
        <div>
          <Marketbtn title="Fish Feed" />
        </div>
      </div>
    </div>
  );
}

export default FeedsButton;
