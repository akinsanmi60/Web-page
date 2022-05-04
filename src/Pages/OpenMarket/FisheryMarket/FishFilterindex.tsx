import React from "react";
import Marketbtn from "../CommonComponents/Marketbtn";

function FishButton() {
  return (
    <div>
      <div className="filterbox">
        <div>
          <Marketbtn title="Fry" />
        </div>
        <div>
          <Marketbtn title="Fingerling" />
        </div>
        <div>
          <Marketbtn title="Juvenile" />
        </div>
        <div>
          <Marketbtn title="Post F and J" />
        </div>
      </div>
    </div>
  );
}

export default FishButton;
