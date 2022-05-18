import styled from "styled-components";
import { CustomInputProps } from "./types";

const Wrapper = styled.div<Pick<CustomInputProps, "error" | "reducePadding">>`
  .MuiFormControl-root {
    width: 100%;
    // margin-top: 4px;

    &:hover,
    &:focus {
      background-color: transparent;
    }
  }

  .MuiInputBase-input {
    :focus {
      margin: 0;
    }
  }

  .MuiInputLabel-filled.MuiInputLabel-shrink {
    display: none;
  }

  .MuiInputLabel-filled {
    margin: -8px 0 0 20px;
    font-size: 12px;
    text-transform: capitalize;
  }

  .MuiFilledInput-input {
    padding: ${({ reducePadding }) =>
      reducePadding ? ".6rem 0.7rem" : ".6rem 1rem"};
    font-size: 12px;

    :-webkit-autofill {
      border-radius: 25px;
    }
  }

  .MuiFilledInput-underline {
    background: none;
    border: ${({ error }) => (error ? "1px solid red" : "1px solid #cecece")};
    border-radius: 8px;

    :before,
    :after {
      border: none;
    }

    :hover:before {
      border: none;
    }
    :hover {
      border: 1px solid var(--primary-blue);
    }
  }

  .MuiFilledInput-root {
    .Mui-focused {
      background: none;
    }
    &:hover {
      background: none;
    }
  }

  .MuiFilledInput-underline.Mui-disabled:before {
    border-bottom-style: none;
  }
`;
export default Wrapper;
