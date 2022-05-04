import styled, { keyframes } from "styled-components";

export const NavbarContainer = styled.div`
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px 25px;
  margin: 0 auto;
  background: #35424a;
`;

export const NavWrapper = styled.div`
  width: 100%;
  background: #35424a;
  z-index: 99999;
  position: sticky;
  top: 0;
`;

export const CategorySection = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  padding: 15px;
  background: #35424a;
  border-top: #e8491d 5px solid;
  p {
    font-size: 13px;
    color: white;
  }

  &:active {
    color: #e8491d;
  }
`;

export const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: white;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  display: flex;
  text-decoration: none;
  &:active {
    color: #e8491d;
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
  height: 32px;
  padding: 2px;
  background: #35424a;
  border-top: #e8491d 5px solid;
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
