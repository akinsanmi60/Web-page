import React from "react";
import { ErrorWrapper, PageWrapper } from "./style";
import { ReactComponent as ErrorLogo } from "../../Assets/pagenotfound.svg";
import LogoIcon from "../../Assets/Ace-Logo.png";
import Button from "../../Common/Button";

const styles = {
  logo: {
    width: "80px",
  },
};

function PageNotFound() {
  return (
    <PageWrapper>
      <div>
        <img src={LogoIcon} alt="" style={styles.logo} />
      </div>
      <ErrorWrapper>
        <div className="errorimage">
          <ErrorLogo />
        </div>
        <div className="error-message">
          <h1>PAGE NOT FOUND</h1>
          <p>
            The page you are looking for was either moved, removed, rename or
            might never existed.
          </p>
          <div className="errorbtn">
            <Button title="Go back home" route="/" />
            <Button title="Contact Us" route="/Touch" />
          </div>
        </div>
      </ErrorWrapper>
    </PageWrapper>
  );
}

export default PageNotFound;
