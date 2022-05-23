import styled from "styled-components";

const Wrapper = styled.div`
  .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .select-btn {
    display: flex;
    justify-content: center;
  }
  .paginationBttns a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #e8491d;
    color: white;
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: #e8491d;
  }

  .paginationActive a {
    color: white;
    background-color: #e8491d;
  }

  .paginationDisabled a {
    color: grey;
    background-color: transprent;
  }
`;
export default Wrapper;
