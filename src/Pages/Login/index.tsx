/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../Common/Logo/Logo";
import { Wrapper, Button, LogginWrapper, Box } from "./style";
import { ReactComponent as PassLogo } from "../../Assets/passimage.svg";
import AuthContext from "../../Context/AuthProvider";

type FormData = {
  email: string;
  password: string;
};

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const schema = yup
  .object({
    email: yup
      .string()
      .matches(EMAIL_REGEX, "Please enter a valid email address")
      .required(),
    password: yup
      .string()
      .matches(PASSWORD_REGEX, "Please enter a strong password")
      .required(),
  })
  .required();

function Login() {
  const { setAuthUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        data,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      const token = response?.data?.token;
      const user = response?.data?.user;
      setAuthUser({ user, token });
      setSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LogginWrapper>
      {success ? (
        <h1>Success!</h1>
      ) : (
        <LogginWrapper>
          <Box>
            <Logo />
            <Wrapper>
              <div className="login-container">
                <div className="form-container">
                  <h1 className="title">Sign In to ACE</h1>
                  <p className="title-text">
                    Please enter your ACE password and the email address
                    associated with your account to sign in.
                  </p>
                  <form onSubmit={handleSubmit(handleLogin)}>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      id="email"
                      autoComplete="off"
                      required
                      {...register("email")}
                      {...(errors.email && "Email is required")}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      required
                      {...register("password", {
                        maxLength: 20,
                      })}
                    />

                    <span className="forgetpass">
                      Forgot Password?
                      <Link to="/passwordreset">Reset it</Link>
                    </span>
                    <Button>Sign In</Button>
                    <p>
                      Don't have an account?.
                      <Link to="/signup" className="attest">
                        Signup
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
              <div className="illus">
                <PassLogo />
              </div>
            </Wrapper>
          </Box>
        </LogginWrapper>
      )}
    </LogginWrapper>
  );
}

export default Login;
