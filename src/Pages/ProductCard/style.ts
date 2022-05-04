import styled from "styled-components";

const ItemWrapper = styled.div`
  padding: 15px;
  .box-item {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    .productcard {
      width: 65%;
      overflow: hidden;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .product-box {
      background: white;
      padding: 12px;
      @media (max-width: 768px) {
        padding: 10px;
      }
    }
    .productimage {
      display: flex;
      justify-content: space-around;
      img {
        width: 100%;
        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }
    .productdetails {
      margin-top: 10px;
      border-bottom: 2px solid #35424a;
      .advert {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        h1 {
          font-size: 20px;
          font-weight: bolder;
          text-align: center;
        }

        .advertview {
          .icons {
            margin-right: 3px;
          }
        }
      }
      .priceinfo {
        display: flex;
        margin-bottom: 25px;
        flex-wrap: wrap;
        span {
          margin-right: 6px;
        }
        .advertinfo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 2px;
          font-size: 12px;
          border: 1px solid #eef2f4;
        }
      }
    }
    .productdescription {
      margin-top: 10px;
      border-bottom: 2px solid #35424a;
      p {
        text-align: justify;
        font-style: italic;
        font-weight: normal;
        font-size: 15px;
        line-height: 15px;
      }
      h1 {
        font-size: 20px;
        font-weight: bolder;
        text-align: justify;
        margin-bottom: 8px;
      }
      .productdcontact {
        margin-top: 10px;
        margin-bottom: 10px;
        p {
          text-align: justify;
          font-style: italic;
          font-weight: normal;
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
    .feedbackcard {
      width: 34%;
      padding-left: 0;
      display: flex;
      flex-direction: column;
      float: right;
      margin-bottom: 20px;
      background: black;
      @media (max-width: 768px) {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
`;
export default ItemWrapper;
