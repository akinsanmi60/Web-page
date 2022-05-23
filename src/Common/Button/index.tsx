/* eslint-disable react/function-component-definition */
// @ts-nocheck
import MUIButton, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type IVariant = "blue" | "orange" | "whitesmoke";
type MUIPropKeys = keyof ButtonProps;

type IButton = {
  [P in MUIPropKeys]: ButtonProps[P];
};

interface IButtonParent extends Omit<IButton, "variant"> {
  title: string;
  type: "outlined" | "text" | "contained";

  handleClick: (...args: any[]) => any;
  children: ReactNode;
  variant: IVariant;
  isLoading: boolean;
  [P: MUIPropKeys]: ButtonProps[P];
  id?: string;
}
const Wrapper = styled.div<Pick<IButtonParent, "variant">>`
  .MuiButton-contained {
    box-shadow: none;
    padding: 4px 20px;
    border-radius: 4px;
    background-color: #e8491d;
    color: #ffffff;
    font-size: 14px;
    text-transform: capitalize;
    border: 0;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    :hover {
      ${({ variant }) =>
        variant === "orange" &&
        `
        border: 1px solid var(--primary-orange);
        color: var(--primary-orange);
        background: transparent;
        box-shadow: none;
  
        svg {
          fill: var(--primary-orange);
        }
      `}
    }
    :active {
            boxShadow: "none",
            backgroundColor: "green",
            borderColor: "yellow",
          }
  }

  svg {
    fill: var(--white);
  }

  span {
    display: flex;
    justify-content: center;
  }

  .MuiButton-label {
    font-weight: 500;
  }

  .MuiButton-contained.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

const Button: FC<Partial<IButtonParent>> = ({
  title,
  handleClick,
  children,
  variant = "blue",
  isLoading,
  id,
  type,
}) => (
  <Wrapper variant={variant}>
    <MUIButton
      variant={type ?? "contained"}
      onClick={handleClick}
      disabled={isLoading}
      id={id || title}
    >
      {isLoading ? (
        <CircularProgress size={30} color="inherit" />
      ) : (
        children || title
      )}
    </MUIButton>
  </Wrapper>
);

export default Button;
