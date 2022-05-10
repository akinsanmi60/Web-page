import styled from "styled-components";

import img from "../../Assets/steven-weeks.jpg";

export const HomePageWrapper = styled.div`
  margin: auto;
  width: 100%;
  background-color: var(--dark-bg);
  color: white;
`;
export const ImageWrapper = styled.div`
  background: url(${img});
  min-height: 550px;
  background-size: cover;
  margin-bottom: 30px;

  @media (max-width: 425px) {
    min-height: 210px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 0px;
  }
  @media (min-width: 768px) {
    background-size: cover;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  .sideA {
    width: 70%;
  }
  .sideB {
    width: 30%;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    .sideA {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .sideA {
      width: 100%;
    }
  }
  @media (max-width: 425px) {
    .sideB {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .sideB {
      width: 100%;
    }
  }
`;
