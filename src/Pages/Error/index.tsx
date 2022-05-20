import React from "react";
import { Link } from "react-router-dom";
import { ErrorWrapper, PageWrapper } from "./style";
import { ReactComponent as ErrorLogo } from "../../Assets/pagenotfound.svg";
import LogoIcon from "../../Assets/Ace-Logo.png";

type ButtonProp = {
  title: string;
  route: string;
};
const style = {
  btn: {
    width: " 160px",
    height: "50px",
    left: " 1153px",
    top: "36px",
    background: " #e8491d",
    borderRadius: " 4px",
    marginRight: "15px",
    outline: "none",
    color: "white",
    border: "none",
  },
};
function Button({ title, route }: ButtonProp) {
  return (
    <Link to={route}>
      <button style={style.btn} type="submit">
        {title}
      </button>
    </Link>
  );
}

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
