import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";
import { FooterWrapper, LinkItem } from "./style";

function Label(props: { [x: string]: any; htmlFor: any }) {
  const { htmlFor, ...otherProps } = props;

  return <label htmlFor={htmlFor} {...otherProps} />;
}
function Footer() {
  const [letter, setLetter] = useState("");
  const letterRef = useRef<HTMLInputElement>(null!);

  return (
    <FooterWrapper>
      <div className="footer-right">
        <Logo />
        <p>
          Ace Farm-Market is an online marketplace for farmers developed by a
          Farmer for farmers. Ace Farm-Market is led by a team of digital
          entrepreneurship experts that understands the context to build the
          largest online farmers markeplace in Africa.
        </p>
      </div>
      <div className="footerbox">
        <div className="footer-middle">
          <h1>Contact info</h1>
          <p>
            <FontAwesomeIcon className="icons" icon={faPhone} />
            <span>+2348164279799</span>
          </p>
          <p>
            <span>9c Environmental Crescent Lagos state</span>
          </p>
          <p>
            <span>acefarmermarket100@gmail.com</span>
          </p>
        </div>

        <div className="letter">
          <div className="footer-contact">
            <h1>Info Links</h1>
            <LinkItem>
              <Link to="/Touch">Contact us</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/testimony">Testimony</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/help">Help</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/Career">Careers</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/MarketPlace">Market</Link>
            </LinkItem>
          </div>
          <div className="footerform">
            <Label htmlFor="letters">Subscribe for updates</Label>
            <input
              type="text"
              id="letters"
              ref={letterRef}
              autoComplete="off"
              onChange={e => setLetter(e.target.value)}
              value={letter}
              required
            />
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: " #e8491d",
                marginTop: "5px",
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
