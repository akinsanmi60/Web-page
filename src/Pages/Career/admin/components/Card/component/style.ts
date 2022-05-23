/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const CardWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 12px;
  // :hover {
  //   background-color: orange;
  //   color: var(--white);
  //   cursor: pointer;
  // }
  p {
    font-size: 13px;
    color: white;
    font-weight: normal;
  }

  .blog-box {
    .blog-wrap {
      border-radius: 20px;
      background: #35424a;
      display: flex;
      flex-direction: row;
      padding: 10px;
      @media (min-width: 425px) {
        width: 100%;
        display: flex;
        flex-direction: row;
      }
      @media (min-width: 768px) {
        width: 100%;
      }

      .imgbox {
        padding-right: 10px;
      }

      .coybox {
        display: flex;
        flex-direction: row;
        @media (max-width: 425px) {
          display: flex;
          flex-direction: column;
          .cname,
          span,
          p {
            font-size: 10px;
            color: white;
            font-weight: normal;
          }
          .title {
            font-weight: 600;
            font-size: 12px;
            line-height: 22px;
            color: white;
          }
        }
        .coydetails {
          @media (min-width: 786px) {
            padding-right: 0px;
          }
          @media (min-width: 1024px) {
            padding-right: 150px;
          }
        }
        .verify {
          display: flex;
          align-items: center;
          flex: 5;
          .vcoontainer {
            margin: 0 auto;
          }
        }
        .price {
          display: flex;
          flex-direction: column;
          .pricecoontainer {
            margin: 0 auto;
          }
          @media (min-width: 425px) {
            .pricecoontainer {
              margin: 0;
            }
          }
        }
      }
      .cname,
      span {
        font-size: 13px;
        color: white;
        font-weight: normal;
      }
      .title {
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        color: white;
      }
      .logodiv {
        box-shadow: 0 0 20px 2px rgb(183 75 13 / 25%);
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    }
  }

  .content {
    font-size: var(--font-accent);
    line-height: 1.5;
  }
`;
