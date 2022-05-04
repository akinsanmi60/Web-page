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
  }
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
