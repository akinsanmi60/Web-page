import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, Button, SignWrapper } from "./style";
import { ReactComponent as SignLogo } from "../../Assets/signpass.svg";
import Logo from "../../Common/Logo/Logo";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NUM_REGEX = /^\d{11}$/;
const MAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Signup() {
  // to access the input element in the DOM this useRef is created
  const userRef = useRef<HTMLInputElement>(null!);
  const errRef = useRef<HTMLInputElement>(null!);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  /** this is use to set focus on input when the page loads and to
   * do useRef is set to the input */
  useEffect(() => {
    userRef.current.focus();
  }, []);

  /** this is use to validate the user input. Thats why user is pass as dependency */
  useEffect(() => {
    setValidName(USER_REGEX.test(user)); // the USER_REGEX is checking the character in the inputs
  }, [user]);

  /** this is use to validate the password input. Thats why password is pass as dependency */
  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password)); // the PWD_REGEX is checking the character in the inputs
    setValidMatch(password === matchPassword); // here is checking if the password is the same wfith matchPassword
  }, [password, matchPassword]);

  /** this is use to validate the phone input. Thats why user is pass as dependency */
  useEffect(() => {
    setValidPhone(NUM_REGEX.test(phone)); // the NUM_REGEX is checking the character in the inputs
  }, [phone]);

  useEffect(() => {
    setValidEmail(MAIL_REGEX.test(email)); // the MAIL_REGEX is checking the character in the inputs
  }, [email]);

  /** this is use to clear the error message when it is read by user,
   * it will take effect when a wrong change happens in the value of the
   * dependency array
   */
  useEffect(() => {
    setErrMsg("");
  }, [user, password, matchPassword]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // this will prevent button to be enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(password);
    // const v3 = NUM_REGEX.test(phone);
    // const v4 = MAIL_REGEX.test(email);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    setSuccess(true);
    setUser("");
    setPassword("");
    setMatchPassword("");

    errRef.current.focus();
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
                <form onSubmit={handleSubmit}>
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    id="First Name"
                    autoComplete="off"
                    required
                    ref={userRef}
                    onChange={e => setUser(e.target.value)}
                    value={user}
                    aria-invalid={validName ? "false" : "true"}
                  />

                  <label htmlFor="lastname">last Name</label>
                  <input
                    type="text"
                    id="lasst Name"
                    autoComplete="off"
                    required
                    ref={userRef}
                    onChange={e => setUser(e.target.value)}
                    value={user}
                    aria-invalid={validName ? "false" : "true"}
                  />

                  <label htmlFor="phonenumber">Phone Number</label>
                  <input
                    type="text"
                    id="Phone Number"
                    autoComplete="off"
                    required
                    onChange={e => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                    aria-invalid={validPhone ? "false" : "true"}
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    autoComplete="off"
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    aria-invalid={validEmail ? "false" : "true"}
                  />

                  <label htmlFor="password">
                    Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validPassword && password ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validPassword || !password ? "hide" : "invalid"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    aria-invalid={validPassword ? "false" : "true"}
                  />

                  <label htmlFor="Confirm Password">
                    Confirm Password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validMatch ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validMatch || !matchPassword ? "hide" : "invalid"
                      }
                    />
                  </label>
                  <input
                    type="password"
                    id="Confirm password"
                    required
                    onChange={e => setMatchPassword(e.target.value)}
                    value={matchPassword}
                    aria-invalid={validMatch ? "false" : "true"}
                  />

                  <div className="agreement">
                    <input type="checkbox" id="Agree" />
                    <p>I agree with the terms of use</p>
                  </div>
                  <Button
                    disabled={
                      !validName ||
                      !validPassword ||
                      !validMatch ||
                      !validPhone ||
                      !validEmail
                    }
                  >
                    Sign Up
                  </Button>
                  <p>
                    Already with an account?.
                    <Link to="/login" className="attest">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="illus">
              <SignLogo />
            </div>
          </Wrapper>
        </SignWrapper>
      )}
    </SignWrapper>
  );
}

export default Signup;
