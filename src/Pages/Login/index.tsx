import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Common/Logo/Logo";
import { Wrapper, Button, LogginWrapper, Box } from "./style";
import { ReactComponent as PassLogo } from "../../Assets/passimage.svg";

function Login() {
  const userRef = useRef<HTMLInputElement>(null!);
  const errRef = useRef<HTMLInputElement>(null!);

  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setUser("");
    setPassword("");
    setSuccess(true);
    errRef.current.focus();
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

                  <form onSubmit={handleLogin}>
                    <p
                      ref={errRef}
                      className={errMsg ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {errMsg}
                    </p>
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={e => setUser(e.target.value)}
                      value={user}
                      required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                      required
                    />

                    <span className="forgetpass">
                      Forgot Password?
                      <Link to="/passwordreset">Reset it</Link>
                    </span>
                    <Button disabled={!user || !password}>Sign In</Button>
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
