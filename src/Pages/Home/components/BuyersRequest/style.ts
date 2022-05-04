import styled from "styled-components";

export const RequestWrapper = styled.div`
  min-height: 150px;
  padding: 24px;
  margin-top: 20px;

  .wrapper-title {
    font-size: 18px;
    color: white;
    border-left: 3px solid #e8491d;
    padding: 2px;
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
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
