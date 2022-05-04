import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const AccessibilityContainer = styled.div`
  display: flex;
`;

function Accessibility() {
  return (
    <AccessibilityContainer>
      <Button title="Login" route="/login" />
    </AccessibilityContainer>
  );
}
export default Accessibility;
