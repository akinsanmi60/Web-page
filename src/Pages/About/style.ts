import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding: 20px;
  background-color: var(--dark-bg);
  .aboutBox {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 10px;
  }
  .linkcontainer {
    background: #35424a;
    border-right: 4px solid #e8491d;
    color: white;
    padding: 25px;
    width: 20%;
    height: 200px;
    a {
      text-decoration: none;
      color: white;
      margin-top: 10px;
    }
  }
  .linkcontent {
    width: 80%;
  }
  .content {
    width: 100%;
  }
  .outletcontainer {
    background: #35424a;
    color: white;
    padding: 30px;
    width: 85%;
  }
  .connect {
    padding: 3px 0;
    border-bottom: 1px solid #e8491d;
    margin-bottom: 10px;
  }
`;

export const LinkItem = styled.li`
  color: #222;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  text-decoration: none;
  &:active {
    color: #e8491d;
  }
`;

export const OverviewWrapper = styled.div`
  .wrapper {
    display: flex;
    .img-container {
      min-width: 26rem;
      padding-left: 3.125rem;
    }
    p {
      margin-bottom: 12px;
    }
  }
`;
export const ChooseWrapper = styled.div`
  padding: 20px;
  .C-wrapper {
    display: flex;
    .img-container {
      min-width: 26rem;
      padding-right: 3.125rem;
    }
    p {
      margin-bottom: 6px;
      text-align: center;
    }
    .icon-container {
      display: flex;
      justify-content: center;
    }
    .icons {
      font-size: 40px;
      color: #e8491d;
    }
    h1 {
      margin-bottom: 5px;
      margin-top: 5px;
      font-size: 20px;
      font-weight: bolder;
      text-align: center;
    }
  }
  .Scontainer {
    margin-bottom: 25px;
  }
`;
