import React from "react";
import { ReactComponent as VerifiedLogo } from "../../Assets/insertres97w.svg";
import { Button, VerifiedWrapper, Wrapper } from "./style";

function Verification() {
  return (
    <VerifiedWrapper>
      <Wrapper>
        <div className="imagecontainer">
          <VerifiedLogo />
        </div>
        <form>
          <h1>Enter verification</h1>
          <p>
            We sent a verification code to email. Enter the six digit code below
          </p>
          <input type="text" placeholder="Enter Verfication Code" required />

          <Button>Verify</Button>
          <p className="footer">
            Didn't receive a code?
            <span>Click here to resend!</span>
          </p>
        </form>
      </Wrapper>
    </VerifiedWrapper>
  );
}

export default Verification;
