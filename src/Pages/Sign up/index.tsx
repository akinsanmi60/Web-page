/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Wrapper, SignWrapper, Button, Box } from "./style";
import { ReactComponent as SignLogo } from "../../Assets/Ecommerce withoutfloor.svg";
import Logo from "../../Common/Logo/Logo";

const styles = {
  logo: {
    width: "35vw",
    marginTop: "50px",
  },
};

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
};

function Signup() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();
  const submitForm = async data => {
    console.log("value", data);
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        data,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      console.log("=====", response);
      setSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SignWrapper>
      {success ? (
        <section>
          <h1>Success!</h1>
        </section>
      ) : (
        <SignWrapper>
          <Box>
            <Logo />
            <Wrapper>
              <div className="login-container">
                <div className="form-container">
                  <h1 className="title">Sign Up to ACE</h1>
                  <p className="title-text">
                    Please enter your details to sign-up with ACE
                  </p>
                  <form onSubmit={handleSubmit(submitForm)}>
                    <div>
                      <label htmlFor="firstname">First name</label>
                      <input type="text" {...register("firstname")} />
                    </div>
                    <div>
                      <label htmlFor="lastname">Last name</label>
                      <input type="text" {...register("lastname")} />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        {...register("email", {
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                      />
                    </div>
                    <div>
                      <label htmlFor="Password">Password</label>
                      <input
                        type="password"
                        {...register("password", {
                          maxLength: 20,
                        })}
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input type="password" {...register("password")} />
                    </div>
                    <div className="agreement">
                      <input type="checkbox" />
                      <p>I agree with the terms of use</p>
                    </div>
                    <div className="agreementbtn">
                      <Button>Register</Button>
                    </div>
                    <div className="agreementlink">
                      <p>
                        Already with an account?.
                        <Link to="/login" className="attest">
                          Login
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="illus-container">
                <div className="illus">
                  <SignLogo style={styles.logo} />
                </div>
              </div>
            </Wrapper>
          </Box>
        </SignWrapper>
      )}
    </SignWrapper>
  );
}

export default Signup;
