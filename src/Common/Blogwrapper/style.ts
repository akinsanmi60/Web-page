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
  border-bottom: #e8491d 10px solid;
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
export default Header;

export const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  padding: 0 40px;
  background: #35424a;
  border-bottom: #e8491d 5px solid;
  p {
    font-size: 13px;
    color: white;
  }
  .linkside {
    display: flex;
  }
  .coy {
    padding: 5px 5px;
    font-weight: 500;
    align-items: center;
  }
`;

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
`;
