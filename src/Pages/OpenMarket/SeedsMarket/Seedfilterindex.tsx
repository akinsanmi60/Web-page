import React from "react";
import Marketbtn from "../CommonComponents/Marketbtn";

function SeedButton() {
  return (
    <div>
      <div className="filterbox">
        <div>
          <Marketbtn title="Field" />
        </div>
        <div>
          <Marketbtn title="Flower" />
        </div>
        <div>
          <Marketbtn title="Forage" />
        </div>
        <div>
          <Marketbtn title="Forest" />
        </div>
        <div>
          <Marketbtn title="Fruit" />
        </div>
        <div>
          <Marketbtn title="Vegetable" />
        </div>
      </div>
    </div>
  );
}

export default SeedButton;
