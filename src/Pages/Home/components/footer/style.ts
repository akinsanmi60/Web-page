import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #35424a;
  display: flex;
  margin: 0 auto;
  padding: 24px;
  width: 100%;
  .footer-right {
    padding: 9px;
    width: 40%;
    p {
      width: 70%;
      font-size: 13px;
      color: white;
    }
  }

  .footer-middle {
    padding: 9px;
    width: 20%;
    p {
      width: 60%;
      margin-top: 5px;
      margin-left: -70px;
      font-size: 13px;
      color: white;
    }
    .icons {
      margin-right: 5px;
      color: #3c1d59;
    }
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: white;
      margin-left: -69px;
    }
  }

  .letter {
    padding: 9px;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input[type="text"] {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 15px;
      padding: 8px;
      width: 100%;
      display: inline-block;
      border: 1px solid #e1e0e2;
      box-sizing: border-box;
    }
    label {
      margin-top: 5px;
      color: white;
    }

    .footer-contact {
      display: flex;
      flex-direction: column;
      a {
        text-decoration: none;
        color: white;
        margin-top: 4px;
      }
    }
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
