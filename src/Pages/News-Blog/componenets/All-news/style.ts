import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--dark-bg);
  height: 100%;
  color: white;
  overflow: hidden;
  .postwrapper {
  }
  .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
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

export const EmptyData = styled.div`
  background-color: var(--dark-bg);
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 95px;
  p {
    font-weight: 500;
    font-size: 22px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;
