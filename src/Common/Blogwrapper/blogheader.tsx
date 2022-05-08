import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Header, { LinkItem } from "./style";

const styles = {
  a: {
    textDecoration: "none",
    color: "inherit",
    fontSize: "inherit",
  },
};

export default function Blogheader() {
  const [searchBlog, setSearchBlog] = useState("");
  const searchRef = useRef<HTMLInputElement>(null!);
  return (
    <div>
      <Header>
        <LinkItem>
          <Link style={styles.a} to="/">
            <FontAwesomeIcon className="icons" icon={faAngleLeft} /> Home
          </Link>
        </LinkItem>
        <div className="input-container">
          <form>
            <input
              type="text"
              id="letters"
              ref={searchRef}
              autoComplete="off"
              onChange={e => setSearchBlog(e.target.value)}
              value={searchBlog}
              required
            />
            <Button
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
              Search
            </Button>
          </form>
        </div>
        <LinkItem>
          <Link style={styles.a} to="/">
            Login / Sign-up
          </Link>
        </LinkItem>
      </Header>
    </div>
  );
}
