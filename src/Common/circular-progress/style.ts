import styled from "styled-components";

const ProgressWrapper = styled.div`
  width: fit-content;
  .svg {
    display: block;
    margin: 20px auto;
    max-width: 100%;
  }
  .svg-circle-bg {
    fill: none;
  }
  .svg-circle {
    fill: none;
  }
  .svg-circle-text {
    font-size: 1rem;
    text-anchor: middle;
    fill: #000000;
    font-weight: bold;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 10px;
  }
`;
export default ProgressWrapper;
