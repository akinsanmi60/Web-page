import styled from "styled-components";

export const PageWrapper = styled.section`
  background: white;
  padding: 20px;
`;
export const ErrorWrapper = styled.section`
  display: flex;
  .errorimage {
    width: 60%;
  }
  .error-message {
    width: 50%;
    margin-top: 150px;
    h1 {
      font-size: 50px;
      text-align: center;
      color: #3c1d59;
    }
    p {
      margin-bottom: 20px;
      margin-top: 10px;
      color: #3c1d59;
      width: 73%;
      text-align: center;
      margin-left: 82px;
    }

    .errorbtn {
      margin-left: 130px;
    }
  }
`;
