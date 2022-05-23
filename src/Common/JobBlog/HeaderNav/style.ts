import styled from "styled-components";

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 15px;
  background: #35424a;
  z-index: 99999;
  position: sticky;
  top: 0;
  border-bottom: #e8491d 5px solid;
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
    display: flex;
    flex-direction: row;
    @media (min-width: 375px) {
      display: flex;
      flex-direction: row;
    }
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
    @media (max-width: 425px) {
      width: 40vw;
      height: 30px;
    }
  }
  .click {
    @media (max-width: 425px) {
      width: 30px;
      height: 30px;
    }
  }
`;
export default Header;

export const LinkItem = styled.li`
  height: 100%;
  padding: 0 10px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  display: flex;
  text-decoration: none;
  &:active {
    color: #e8491d;
  }
  @media (max-width: 425px) {
    font-size: 8px;
  }
`;
