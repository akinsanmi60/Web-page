import styled from "styled-components";

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
  @media (max-width: 425px) {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;

    p {
      font-size: 8px;
      color: white;
      margin-top: 4px;
    }
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
  @media (max-width: 425px) {
    font-size: 8px;
  }
`;
