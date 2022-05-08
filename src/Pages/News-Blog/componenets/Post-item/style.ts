import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--dark-bg);
  color: white;
  overflow: hidden;

  .chip {
    font-size: 0.7rem;
    background: linear-gradient(to right, #6190e8, #a7bfe8);
    color: #fff;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    width: fit-content;
    text-transform: capitalize;
  }
  .blogitem-box{
    margin-bottom: 30px;
  }
  .blogItem-wrap {
    background:  #35424a;
    display: flex;
    flex-direction: column;
    padding: 3%;
    margin: 0 2%;
};
    img {
      border-radius: 10px;
      width: 100%;
      height: 200px;
    }
  }
`;
export default Wrapper;
