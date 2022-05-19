/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Logo from "../../Common/Logo/Logo";
import { Wrapper, Button, LogginWrapper, Box } from "./style";
import { ReactComponent as PassLogo } from "../../Assets/passimage.svg";
import AuthContext from "../../Context/AuthProvider";

type FormData = {
  email: string;
  password: string;
};
function Login() {
  const { setAuthUser } = useContext(AuthContext);
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

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
                      {...register("email", {
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      })}
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
