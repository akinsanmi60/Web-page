import styled from "styled-components";

const BlogNewsWrapper = styled.div`
  background-color: var(--dark-bg);
  color: white;
  .blogwrapper {
    display: flex;
    @media (max-width: 425px) {
      flex-direction: column;
    }
  }
  .blogmain {
    flex: 8;
    width: 100%;
    padding: 20px;
    border-right: 1px solid #e8491d;
    margin-bottom: 30px;
    margin-top: 30px;
    .content {
      width: 100%;
    }
    @media (max-width: 425px) {
      border-right: none;
    }

    @media (max-width: 768px) {
      margin-top: 15px;
    }
  }
  .sidebar {
    flex: 4;
    margin-top: 30px;
    padding: 10px;
    h1 {
      margin-bottom: 5px;
      margin-top: 5px;
      font-size: 20px;
      font-weight: bolder;
      text-align: center;
    }
    @media (max-width: 768px) {
      margin-top: 15px;
      h1 {
        font-size: 15px;
      }
    }
  }
  .connect {
    padding: 3px 0;
    border-bottom: 1px solid #e8491d;
    border-top: 1px solid #e8491d;
    margin-bottom: 10px;
  }
  .categorycontainer {
    padding: 10px;
    @media (max-width: 425px) {
      margin-top: -50px;
    }
  }
  .reviewcontainer {
    margin-top: 90px;
    .newrecent {
      display: flex;
      flex-directon: row;
      margin: 10px;
      padding: 8px;
      @media (max-width: 768px) {
        padding: 0;
      }
      .image {
        width: auto;
        transition: 1s;
        img {
          box-shadow: 0 0 20px 2px rgb(183 75 13 / 25%);
          width: 100px;
          height: 100px;
          border-radius: 100%;
          @media (max-width: 425px) {
            width: 60px;
            height: 60px;
          }
          @media (max-width: 768px) {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
    .newtext {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      p {
        text-align: justify;
        font-style: italic;
        font-weight: normal;
        margin-left: 10px;
        font-size: 16px;
      }
      @media (max-width: 768px) {
        font-size: 10px;
      }
    }

    @media (max-width: 425px) {
      margin-top: 5px;
    }
  }
  span {
    text-align: justify;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    margin-left: 5px;
    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;
export default BlogNewsWrapper;

export const LinkItem = styled.li`
  color: #222;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  text-decoration: none;
  &:active {
    color: #e8491d;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: inherit;
    margin-top: 9px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
