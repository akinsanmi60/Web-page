import styled from "styled-components";

const QuestionWrapper = styled.div`
  background-color: var(--dark-bg);
  color: white;
  padding: 30px;
  width: 100%;
  p {
    text-align: justify;
    font-style: italic;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    margin-top: 7px;
    line-height: 25px;
  }
  h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    background: #35424a;
    margin-top: 15px;
    padding: 10px;
  }
  ol,
  ul {
    padding: 25px;
    line-height: 25px;
  }
  strong,
  b {
    color: #e8491d;
  }
  .title1 {
    background: none;
    text-align: center;
  }
  .img-container {
    display: flex;
    justify-content: center;
  }
`;
export default QuestionWrapper;
