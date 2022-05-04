import styled from "styled-components";

export const ContactWrapper = styled.div`
  background-color: var(--dark-bg);
  width: 100%;
  .greybox {
    display: flex;
    justify-content: center;
  }
  .box {
    border: none;
    border-radius: 10px;
    background: #35424a;
    color: white;
    padding: 20px;
    width: 40%;
    min-height: 100px;
    margin: 40px auto;
  }
  h1 {
    font-size: 20px;
    font-weight: bolder;
  }

  .box span {
    font-weight: bolder;
    color: #e8491d;
    font-size: 20px;
  }
  p {
    font-size: 12px;
  }
  .contact-location {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .icons {
    font-size: 50px;
    color: #e8491d;
  }
`;
export const TextArea = styled.textarea`
  border: none;
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  .columnA {
    width: 50%;
    padding: 10px;
    background-color: var(--dark-bg);
    display: flex;
    justify-content: center;
  }

  .columnA-mode {
    background: #35424a;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 35px;
    width: 80%;

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
      margin-top: 10px;
      color: white;
    }
  }
  .columnB {
    background: Red;
    width: 50%;
  }
`;
