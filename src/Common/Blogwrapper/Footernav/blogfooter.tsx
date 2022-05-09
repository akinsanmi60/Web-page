import React from "react";
import { Link } from "react-router-dom";
import { FooterNav, LinkItem } from "./style";

const styles = {
  a: {
    textDecoration: "none",
    color: "inherit",
    fontSize: "inherit",
  },
};

function blogfooter() {
  return (
    <div>
      <FooterNav>
        <div className="coy">
          <p>ACE FARM_MARKET BLOG</p>
        </div>
        <div className="linkside">
          <LinkItem>
            <Link style={styles.a} to="/">
              About
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/">
              Contact
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/">
              Disclaimer
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/">
              Privacy
            </Link>
          </LinkItem>
        </div>
      </FooterNav>
    </div>
  );
}

export default blogfooter;
