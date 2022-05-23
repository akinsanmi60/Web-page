import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CustomButton from "../../Button";

// import Button from "../../Button";

const AccessibilityContainer = styled.div`
  display: flex;
`;

function Accessibility() {
  const navigate = useNavigate();

  return (
    <AccessibilityContainer>
      <CustomButton onClick={() => navigate("login")} title="Login" />
    </AccessibilityContainer>
  );
}
export default Accessibility;
