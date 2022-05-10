import styled from "styled-components";

export const RequestWrapper = styled.div`
  min-height: 150px;
  padding: 24px;
  margin-top: 20px;

  @media (max-width: 425px) {
    padding: 14px;
    margin-top: 10px;
  }

  .wrapper-title {
    font-size: 20px;
    color: white;
    border-left: 3px solid #e8491d;
    padding: 8px;
    @media (max-width: 425px) {
      font-size: 15px;
      border-left: 3px solid #e8491d;
      padding: 4px;
    }
  }

  .timelocation {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
      font-size: 10px;
      line-height: 12px;
      color: #666666;
    }
  }
  .request-description,
  .request-location {
    text-align: justify;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    color: #333333;
    margin-top: 5px;
  }
  .request-location {
    margin-top: -2px;
    font-size: 10px;
    line-height: 12px;
    color: #666666;
  }
`;

export const RequestCardDiv = styled.div`
  .wrapperbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    p {
      font-size: 12px;
      font-weight: normal;
    }

    span {
      font-size: 12px;
      line-height: 14px;
      text-align: justify;
      color: #333333;
    }
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      padding: 7px;
    }
  }
  @media (max-width: 425px) {
    .wrapperbox {
      flex-direction: column;
      margin-top: 0px;
    }
    .wrapper-title {
      font-size: 10px;
    }
    .mediabox {
      width: 370px;
    }
  }
  @media (max-width: 768px) {
    .wrapperbox {
    }
    .mediabox {
      width: 380px;
      padding: 7px;
    }
  }
`;
