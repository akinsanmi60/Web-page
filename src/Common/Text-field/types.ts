import { FocusEventHandler } from "react";
import { Control } from "react-hook-form";

export interface CustomInputProps {
  name: string;
  defaultValue: string;
  label: string;
  type: string;
  disabled: boolean;
  placeholder: string;
  error: boolean;
  reducePadding: boolean;
  ariaLabelText: string;
  dataTestId: string;
  passValHandler: (e: string) => any;
  customBlur: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  min: Date | string;
  max: Date | string;
  textProp: IMap | string;
  control: Control<Record<string, any>>;
  errors: IMap;
  rules?: IMap;
}

export interface TextProp {}

export type IMap = {
  [x: string]: any;
};
