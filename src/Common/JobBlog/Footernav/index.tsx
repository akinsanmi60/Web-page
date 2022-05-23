import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { Btn, FooterNav, LinkItem } from "./style";

const styles = {
  a: {
    textDecoration: "none",
    color: "inherit",
    fontSize: "inherit",
  },
};

function blogfooter() {
  return (
    <FooterNav>
      <div className="footers">
        <div className="coy">
          <p>ACE FARM_MARKET CAREER</p>
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
      </div>
      <Btn>
        <div className="footerbtn">
          <Button
            className="click"
            size="medium"
            variant="contained"
            sx={{
              backgroundColor: " #e8491d",
              marginBottom: "3px",
              height: "38px",
              "&:active": {
                boxShadow: "none",
                backgroundColor: "green",
                borderColor: "yellow",
              },
            }}
          >
            <span>Create</span>
          </Button>
        </div>
      </Btn>
    </FooterNav>
  );
}

export default blogfooter;
