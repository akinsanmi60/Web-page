import React from "react";
import { Button } from "@mui/material";

type BtnProp = {
  title: string;
};
function Marketbtn({ title }: BtnProp) {
  return (
    <div>
      <Button
        size="small"
        variant="contained"
        sx={{
          backgroundColor: " #e8491d",
          marginTop: "-3px",
          height: "25px",
          borderRadius: "25px",
          "&:hover": {
            backgroundColor: "#e8491d",
            borderColor: "#0062cc",
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
            backgroundColor: "green",
            borderColor: "yellow",
          },
        }}
      >
        {title}
      </Button>
    </div>
  );
}

export default Marketbtn;
