import styled from "styled-components";

export const SignWrapper = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  overflow-x: hidden;
`;

export const Wrapper = styled.section`
  display: flex;
  form-container {
    margin-top: 80px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    padding: 8px;
    margin-top: 10px;
    .agreement {
      display: flex;
    }
    .agreement p {
      margin-top: -15px;
    }
  }

  label {
    margin-top: 30px;
    font-size: 14px;
    line-height: 16px;
  }

  p {
    font-family: "Abhaya Libre Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #433d4a;
    width: 40%;
    padding: 10px;
  }
  h1 {
    font-family: "Abhaya Libre Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #433d4a;
  }
  input[type="text"],
  input[type="password"] {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 15px;
    padding: 8px;
    width: 60%;

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
  .login-container {
    width: 60%;
  }

  .illus {
    width: 40%;
  }
  .hide {
    display: none;
  }

  .valid {
    color: limegreen;
    margin-left: 0.25rem;
  }

  .invalid {
    color: red;
    margin-left: 0.25rem;
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
  margin-bottom: 25px;
  cursor: pointer;
  margin-top: 15px;
  button:hover {
    opacity: 0.8;
  }
`;
