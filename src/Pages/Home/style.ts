import styled from "styled-components";

import img from "../../Assets/steven-weeks.jpg";

export const HomePageWrapper = styled.div`
  margin: auto;
  overflow: hidden;
  width: 100%;
  background-color: var(--dark-bg);
  color: white;
`;
export const ImageWrapper = styled.div`
  background: url(${img});
  min-height: 550px;
  background-size: cover;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .sideA {
    width: 70%;
  }
  .sideB {
    width: 28%;
  }
`;
