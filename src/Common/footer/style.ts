import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #35424a;
  display: flex;
  margin: 0 auto;
  padding: 24px;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    font-size: 10px;
  }
  .footer-right {
    padding: 9px;
    flex: 5;
    p {
      width: 70%;
      font-size: 13px;
      font-weight: normal;
      color: white;
    }
    @media (max-width: 425px) {
      width: 100%;
      p {
        width: 100%;
        font-size: 11px;
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      p {
        width: 100%;
        font-size: 13px;
      }
    }
  }

  .footer-middle {
    padding: 9px;
    flex: 5;
    p {
      width: 60%;
      margin-top: 5px;
      font-size: 13px;
      color: white;
      font-weight: normal;
    }
    .icons {
      margin-right: 5px;
      color: #e8491d;
    }
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: white;
    }
    @media (max-width: 425px) {
      width: 100%;
      p {
        width: 100%;
        font-size: 11px;
      }
      h1 {
        font-size: 15px;
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      p {
        width: 100%;
        font-size: 13px;
      }
      h1 {
        font-size: 18px;
      }
    }
  }

  .letter {
    padding: 9px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: white;
    }

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0px;
      h1 {
        font-size: 15px;
      }
    }

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
      flex: 5;
      a {
        text-decoration: none;
        color: white;
        margin-top: 4px;
      }
      @media (max-width: 425px) {
        margin-top: 20px;
      }
    }
    .footerform {
      flex: 5;
      @media (max-width: 425px) {
        margin-top: 20px;
        font-size: 12px;
      }
    }
  }
`;

export const LinkItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  &:active {
    color: #e8491d;
  }
  @media (max-width: 425px) {
    font-size: 11px;
  }
`;
