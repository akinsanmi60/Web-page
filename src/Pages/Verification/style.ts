import styled from "styled-components";

export const VerifiedWrapper = styled.div`
  background: white;
  padding: 20px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  .imagecontainer {
    width: 50%;
    margin-top: 90px;
  }
  form{
    width: 50%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    padding: 5px;
    h1 {
      font-size: 30px;
      text-align: center;
      color: #3c1d59;
    }
    p {
        margin: 0 auto;
      color: #3c1d59;
   
      text-align: center;
    }

    
    input[type="text"] {
      font-size: 13px;
      padding: 8px;
      width: 60%;
      display: inline-block;
      background-color: white;
      border: 1px solid #e1e0e2;
      box-sizing: border-box;
      filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.02));
      border-radius: 8px;
      margin: 0 auto;

  }
`;

export const Button = styled.button`
  color: white;
  background: #3c1d59;
  font-size: 14px;
  margin: 0 auto;
  height: 40px;
  border: 2px solid #3c1d59;
  border-radius: 50px;
  width: 30%;
  cursor: pointer;
  margin-bottom: 20px;
`;
