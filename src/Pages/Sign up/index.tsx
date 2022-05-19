/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Wrapper, SignWrapper, Button } from "./style";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const submitForm = async (data: any) => {
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
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      autoComplete="off"
                      {...register("firstname", {
                        pattern: /^[A-z][A-z0-9-_]{3,23}$/,
                      })}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname">last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      autoComplete="off"
                      {...register("lastname", {
                        pattern: /^[A-z][A-z0-9-_]{3,23}$/,
                      })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      autoComplete="off"
                      required
                      {...register("email", {
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      {...register("password", {
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                        required: "Kindly fill this field",
                        minLength: {
                          value: 8,
                          message: "must be above 8 characters",
                        },
                      })}
                    />
                    {errors.password ? (
                      <div>{errors.password.message}</div>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="Confirm Password">Confirm Password:</label>
                    <input
                      type="password"
                      id="Confirm password"
                      {...register("confirmpassword", {
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                        required: "Please fill correctly",
                      })}
                    />
                  </div>
                  <div className="agreement">
                    <input type="checkbox" id="Agree" />
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
        </SignWrapper>
      )}
    </SignWrapper>
  );
}

export default Signup;
