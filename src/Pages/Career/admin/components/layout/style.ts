import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--dark-bg);
  .container {
    min-height: 85vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    .jobload {
      width: 69%;
      padding-left: 10px;
      border-left: 3px solid #e8491d;
    }
    .instruction {
      width: 30%;
      .alertwrapper {
        margin: 0 auto;
        background: #35424a;
        color: white;
        padding: 15px;
        width: 95%;
        height: 200px;
        margin-bottom: 25px;
        form {
          label {
            color: white;
            font-size: 14px;
          }
          input[type="text"] {
            font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
              sans-serif;
            font-size: 15px;
            padding: 8px;
            width: 100%;
            height: 40px;
            display: inline-block;
            border: 1px solid #e1e0e2;
            box-sizing: border-box;
            border-radius: 9px;
          }
        }
      }
      .btnsubmit {
        border-radius: 10px;
      }
    }
    .waringwrapper {
      margin: 0 auto;
      background: #35424a;
      color: white;
      padding: 15px;
      width: 95%;
    }
    @media (max-width: 425px) {
      padding: 20px;
      display: flex;
      flex-direction: column;
      .jobload {
        width: 100%;
        padding-left: none;
        border-left: none;
      }
      .instruction {
        padding: 20px;
        margin-bottom: 15px;
        background: green;
        width: 100%;
      }
    }
  }
`;
export default Wrapper;

export const Button = styled.button`
  color: white;
  background: #e8491d;
  font-size: 16px;
  height: 35px;
  border: 0;
  border-radius: 25px;
  width: 50%;
  margin-top: 12px;
  margin-bottom: 20px;
  button:hover {
    opacity: 0.8;
  }
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
   :active {
            boxShadow: "none",
            backgroundColor: "green",
            borderColor: "yellow",
          }
`;
