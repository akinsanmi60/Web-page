/* eslint-disable */
// @ts-nocheck
import { TextField } from "@material-ui/core";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/x-date-pickers/DatePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";
import React, { FC, FocusEventHandler, useState } from "react";
import { Controller } from "react-hook-form";
import { Wrapper } from "./style";
import { CustomInputProps, IMap } from "./types";

const CustomInput: FC<Partial<CustomInputProps>> = ({
  name = "",
  defaultValue = "",
  label = "",
  type = "text",
  textProp,
  control,
  errors,
  passValHandler,
  customBlur,
  disabled,
  placeholder,
  reducePadding = false,
  ariaLabelText,
  dataTestId,
  ...props
}) => {
  const [showPassword, setShowPAssword] = useState(false);
  return (
    <>
      <Wrapper
        error={Boolean(errors && errors[name]?.message)}
        reducePadding={reducePadding}
      >
        <label>{label}</label>
        <Controller
          control={control}
          name={name}
          render={({ onChange, onBlur, value }) => (
            <>
              {textProp === "date" || (textProp as IMap)?.type === "date" ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value || defaultValue}
                    maxDate={props.max ? new Date(props.max) : null}
                    minDate={props.min ? new Date(props.min) : null}
                    onChange={
                      passValHandler
                        ? e => {
                            onChange(e);
                            passValHandler(e.target ? e.target?.value : e);
                          }
                        : onChange
                    }
                    renderInput={(params: IMap) => (
                      <TextField
                        variant="filled"
                        style={{ background: "#fff" }}
                        inputProps={{ "aria-label": ariaLabelText }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              ) : textProp === "datetime-local" ||
                (textProp as IMap)?.type === "datetime-local" ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    value={value || defaultValue}
                    maxDateTime={props.max ? new Date(props.max) : null}
                    minDateTime={props.min ? new Date(props.min) : null}
                    onChange={
                      passValHandler
                        ? e => {
                            onChange(e);
                            passValHandler(e.target ? e.target?.value : e);
                          }
                        : onChange
                    }
                    renderInput={(params: IMap) => (
                      <TextField
                        variant="filled"
                        style={{ background: "#fff" }}
                        inputProps={{ "aria-label": ariaLabelText }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              ) : (
                <FormControl variant="filled">
                  <InputLabel htmlFor="filled-adornment-input">
                    {placeholder ?? label}
                  </InputLabel>
                  <FilledInput
                    onBlur={
                      customBlur ||
                      (onBlur as FocusEventHandler<
                        HTMLInputElement | HTMLTextAreaElement
                      >)
                    }
                    name={name}
                    id={name}
                    disabled={disabled}
                    type={
                      showPassword || type !== "password" ? "text" : "password"
                    }
                    onChange={
                      passValHandler
                        ? e => {
                            onChange(e);
                            passValHandler(
                              e.target
                                ? e.target?.value
                                : (e as unknown as string),
                            );
                          }
                        : e => {
                            e.target.value = e.target.value.replace(/-/gi, "");
                            onChange(e);
                          }
                    }
                    // e.g value = 2021-08-09T14:08 show only date if textprop is date
                    defaultValue={
                      textProp === "date"
                        ? defaultValue!.split("T")[0]
                        : defaultValue
                    }
                    endAdornment={
                      type === "password" ? (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPAssword(!showPassword)}
                            onMouseDown={e => e.preventDefault()}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ) : (
                        ""
                      )
                    }
                    inputProps={{
                      "aria-label": ariaLabelText,
                      "data-testid": dataTestId,
                    }}
                    {...textProp}
                  />
                </FormControl>
              )}
            </>
          )}
          {...props}
        />
        <Typography
          color="error"
          style={{
            fontSize: "12px",
            paddingLeft: "20px",
          }}
        >
          {errors && errors[name]?.message}
        </Typography>
      </Wrapper>
    </>
  );
};

export default CustomInput;
