import styled, { keyframes } from "styled-components";

export const MarketWrapper = styled.div`
  background-color: var(--dark-bg);
`;

export const MarketHeader = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 15px;
  background: #35424a;
  position: sticky;
  top: 0;
  border-top: #e8491d 10px solid;
  p {
    font-size: 13px;
    color: white;
  }
  z-index: 99999;
  &:active {
    color: #e8491d;
  }
  .input-container {
    margin: 0 auto;
  }
  input[type="text"] {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 15px;
    padding: 8px;
    width: 35vw;
    border: 1px solid #e1e0e2;
    box-sizing: border-box;
    margin-right: 9px;
  }
`;

export const LinkItem = styled.li`
  padding: 0 15px;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  text-decoration: none;
  &:active {
    color: #e8491d;
  }
`;

export const MainWrapper = styled.div`
  .marketBox {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 10px;
  }
  .linkcontainer {
    background: #35424a;
    color: white;
    padding: 25px;
    width: 22%;
    a {
      text-decoration: none;
      color: white;
      margin-top: 10px;
    }
  }
  .connect {
    padding: 3px 0;
    border-bottom: 1px solid #e8491d;
    margin-bottom: 10px;
  }

  .content {
    width: 100%;
  }
  .outletcontainer {
    background: #35424a;
    color: white;
    padding: 30px;
    width: 75%;
  }
`;

const tickerh = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-500%, 0, 0);
    }
`;

export const BreakingNews = styled.div`
  width: 100%;
  height: 20px;
  padding: 2px;
  margin-top: 8px;
  overflow: hidden;
  p {
    font-size: 13px;
    color: white;
  }
  z-index: 99999;
  &:active {
    color: #e8491d;
  }

  .newsbox {
    display: flex;
    animation: ${tickerh} 90s linear infinite;
    .newsitem {
      flex-shrink: 0;
      width: 100%;
      text-align: center;
      color: white;
    }
  }
`;
