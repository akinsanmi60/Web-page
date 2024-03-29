/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
  min-height: 30px;
  margin: 0 auto;
  padding: 15px;
  margin-bottom: 20px;
  color: white;
  justify-content: space-around;
  @media (max-width: 425px) {
    margin-bottom: 9px;
  }
  .details {
    margin-top: 10px;
    h1 {
      text-align: center;
      font-weight: 400;
      font-size: 13px;
    }

    p {
      text-align: center;
      font-weight: 900;
      font-size: 18px;
    }

    @media (max-width: 425px) {
      h1 {
        text-align: center;
        font-weight: 300;
        font-size: 10px;
      }
      p {
        text-align: center;
        font-weight: 600;
        font-size: 9px;
      }
    }
  }
`;
