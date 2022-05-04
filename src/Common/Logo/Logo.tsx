import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../../Assets/Ace-Logo.png";

const styles = {
  logo: {
    width: "50px",
  },
};

function Logo() {
  return (
    <Link to="/">
      <div>
        <img src={LogoIcon} alt="" style={styles.logo} />
      </div>
    </Link>
  );
}

export default Logo;
