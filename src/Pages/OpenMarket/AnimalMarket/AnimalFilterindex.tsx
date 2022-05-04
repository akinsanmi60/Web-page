import React from "react";
import Marketbtn from "../CommonComponents/Marketbtn";

function FilteringButton() {
  return (
    <div>
      <div className="filterbox">
        <div>
          <Marketbtn title="Cow" />
        </div>
        <div>
          <Marketbtn title="Ram" />
        </div>
        <div>
          <Marketbtn title="Dog" />
        </div>
        <div>
          <Marketbtn title="Pig" />
        </div>
        <div>
          <Marketbtn title="Goat" />
        </div>
        <div>
          <Marketbtn title="Rodents" />
        </div>
      </div>
    </div>
  );
}

export default FilteringButton;
