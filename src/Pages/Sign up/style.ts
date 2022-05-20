import styled from "styled-components";

export const SignWrapper = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  overflow-x: hidden;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  .login-container {
    width: 60%;
    .form-container {
      p {
        font-family: "Abhaya Libre Medium";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #433d4a;
        padding: 0 10px;
      }
      h1 {
        font-family: "Abhaya Libre Medium";
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #433d4a;
        padding: 3px 10px;

      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 8px;
        margin-top: 8px;
        .agreement {
          display: flex;
        }
        .agreement p {
          margin-top: -6px;
        }
        input[type="text"], input[type="email"],
        input[type="password"] {
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
          font-size: 15px;
          padding: 8px;
          width: 35vw;
          margin-bottom: 15px;
          background-color: white;
          border: 1px solid #e1e0e2;
          box-sizing: border-box;
          filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.02));
          border-radius: 8px;
        }
      


      label {
        margin-top: 10px;
        font-size: 15px;
        line-height: 16px;
        margin-left: 5px;
      }
      .title {
        height: 48px;
        margin-top: 30px;
        color: #433d4a;
        font-size: 36px;
        font-weight: 500;
        padding: 10px;
      }

      .forgetpass {
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 16px;

        letter-spacing: 0.01em;
        color: #433d4a;
        margin-bottom: 10px;
      }
    }
    .illus-container {
      width: 40%;
      .illus {
        padding-right: 20px;
      }
     
    }
  }
`;

export const Button = styled.button`
  color: white;
  background: #3c1d59;
  font-size: 16px;
  margin-left: 90px;
  height: 40px;
  border: 2px solid #3c1d59;
  border-radius: 50px;
  width: 30%;
  margin-top: 12px;
  margin-bottom: 20px;
  button:hover {
    opacity: 0.8;
  }
`;

export const Box = styled.div`
  width: 100%;
`;
