import React from "react";
import Marketbtn from "../CommonComponents/Marketbtn";

function EquipmentButton() {
  return (
    <div>
      <div className="filterbox">
        <div>
          <Marketbtn title="Egg" />
        </div>
        <div>
          <Marketbtn title="Chick" />
        </div>
        <div>
          <Marketbtn title="Broilers" />
        </div>
        <div>
          <Marketbtn title="Layers" />
        </div>
      </div>
    </div>
  );
}

export default EquipmentButton;
