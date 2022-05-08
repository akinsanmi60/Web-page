import styled from "styled-components";

const BlogNewsWrapper = styled.div`
  background-color: var(--dark-bg);
  color: white;
  .blogwrapper {
    display: flex;
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
  }
  .connect {
    padding: 3px 0;
    border-bottom: 1px solid #e8491d;
    border-top: 1px solid #e8491d;
    margin-bottom: 10px;
  }
  .categorycontainer {
    padding: 10px;
  }
  .reviewcontainer {
    margin-top: 90px;
    .newrecent {
      display: flex;
      flex-directon: row;
      margin: 10px;
      padding: 8px;
      .image {
        width: auto;
        transition: 1s;
        img {
          box-shadow: 0 0 20px 2px rgb(183 75 13 / 25%);
          width: 100px;
          height: 100px;
          border-radius: 100%;
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
      }
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
`;
