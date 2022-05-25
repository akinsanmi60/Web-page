import styled from "styled-components";

export const ProductWrapper = styled.div`
  background-color: var(--dark-bg);
  min-height: 150px;
  padding: 24px;
  img {
    width: 100%;
    height: 100%;
  }
  .product-wrapper-title {
    font-size: 18px;
    color: white;
    border-left: 3px solid #e8491d;
    padding: 2px;
    @media (max-width: 425px) {
      font-size: 15px;
      border-left: 3px solid #e8491d;
      padding: 4px;
    }
  }
`;

export const CardDiv = styled.div`
  .wrapperbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    p {
      font-size: 11px;
      font-weight: normal;
    }

    span {
      font-size: 12px;
      line-height: 14px;
      text-align: justify;
      color: #333333;
    }
    .mediabox {
      transition: transform 450ms;
      padding-right: 7px;
    }
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
    }
  }
  @media (max-width: 425px) {
    .wrapperbox {
      margin-top: 0px;
      flex-direction: column;
    }
    .mediabox {
      width: 370px;
      img {
        width: 50%;
        height: 50%;
        border-radius: 10px;
        margin-right: 13px;
      }
      .cardbox {
        display: flex;
        flex-direction: row;
      }
    }

    .boxbutton {
    }
  }
  @media (max-width: 768px) {
    .wrapperbox {
    }
    .mediabox {
      padding: 7px;
    }
  }
`;
