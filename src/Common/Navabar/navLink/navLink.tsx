import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: white;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  display: flex;
  text-decoration: none;
  &:active {
    color: #e8491d;
  }
`;

const styles = {
  a: {
    textDecoration: "none",
    color: "inherit",
    fontSize: "inherit",
  },
};

function NavLinks() {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link style={styles.a} to="/Blog">
            Blog
          </Link>
        </LinkItem>
        <LinkItem>
          <Link style={styles.a} to="/About">
            About
          </Link>
        </LinkItem>
        <LinkItem>
          <Link style={styles.a} to="/MarketPlace">
            Market
          </Link>
        </LinkItem>
        <LinkItem>
          <Link style={styles.a} to="/RequestPlace">
            Request
          </Link>
        </LinkItem>
        <LinkItem>
          <Link style={styles.a} to="/FieldsPage">
            Lands
          </Link>
        </LinkItem>
        <LinkItem>
          <Link style={styles.a} to="/Career">
            Jobs
          </Link>
        </LinkItem>
        <LinkItem>
          <Link style={styles.a} to="/QuestionPage">
            Help
          </Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
export default NavLinks;
