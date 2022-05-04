import styled from "styled-components";

export const BlogWrapper = styled.div`
  // background: green;
  padding: 15px;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .jobs {
    margin-top: 40px;
    flex: 0.8;
  }
  .current-news {
    flex: 0.8;
  }
  .chart-inner-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: white;
  }
`;

export const Wrapper = styled.div`
  .news-item {
    display: flex;
    flex-directon: row;
    margin: 10px;
    img {
      border-radius: 10px;
      width: 100px;
      height: 60px;
    }
    .content {
      padding: 0 5px;
      cursor: pointer .news-date-time {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        span {
          font-size: 10px;
          line-height: 12px;
          color: white;
        }
      }
    }
    p {
      text-align: justify;
      font-style: italic;
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      color: #333333;
      a {
        text-decoration: none;
        display: block;
        span {
          font-size: 12px;
        }
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
