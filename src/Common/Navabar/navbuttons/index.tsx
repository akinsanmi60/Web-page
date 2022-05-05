import React from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import styled from "styled-components";
// import Button from "../../Button";

const AccessibilityContainer = styled.div`
  display: flex;
`;

function Accessibility() {
  const navigate = useNavigate();

  return (
    <AccessibilityContainer>
      <Button
        onClick={() => navigate("login")}
        size="medium"
        variant="contained"
        sx={{
          backgroundColor: " #e8491d",
          marginTop: "5px",
          height: "38px",
          "&:active": {
            boxShadow: "none",
            backgroundColor: "green",
            borderColor: "yellow",
          },
        }}
      >
        Login
      </Button>
    </AccessibilityContainer>
  );
}
export default Accessibility;
