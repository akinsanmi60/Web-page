import styled from "styled-components";

export const LatestWrapper = styled.div`
  .latestbox {
    background: white;
    margin-top: 10px;
    color: #333333;
    h1 {
      font-size: 13px;
      line-height: 15px;
      color: #333333;
    }
  }
  .boxcard {
    padding: 20px;
    display: flex;
    flex-directon: row;
    img {
      border-radius: 10px;
      width: 100px;
      height: 60px;
    }

    @media (min-width: 1024px) {
      .recentbox {
        display: flex;
        flex-direction: row;
      }
    }
  }

  .content {
    padding: 0 8px;
    cursor: pointer;
    .news-date-time {
      display: flex;
      margin: 5px 0;
    }
  }
  span {
    font-size: 10px;
    line-height: 12px;
    margin-left: 5px;
    text-align: justify;
    font-size: 12px;
    color: #333333;
  }
  p {
    text-align: justify;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #333333;
    a {
      text-decoration: none;
      display: block;
      span {
        font-size: 12px;
      }
    }
  }

  .description-content {
    p {
      color: #333333;
    }
  }

  @media (max-width: 425px) {
    .recentbox {
      display: flex;
      flex-direction: row;
    }
  }

  @media (max-width: 768px) {
    .recentbox {
      display: flex;
      flex-direction: column;
      .latestbox {
        padding: 7px;
      }
      h1 {
        font-size: 12px;
        line-height: 11px;
        color: #333333;
      }
      p {
        font-size: 12px;
        color: #333333;
      }
      span {
        font-size: 10px;
        margin-left: 5px;
        color: #333333;
      }
    }
  }
`;

export const EmptyData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  p {
    margin-top: 12px;
  }

  svg {
    height: 129px;
  }
`;
