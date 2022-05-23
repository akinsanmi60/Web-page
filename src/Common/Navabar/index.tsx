import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Accessibility from "./navbuttons";
import NavLinks from "./navLink/navLink";
import Logo from "../Logo/Logo";
import {
  BreakingNews,
  CategorySection,
  LinkItem,
  NavbarContainer,
  NavWrapper,
} from "./style";

const styles = {
  a: {
    textDecoration: "none",
    color: "inherit",
    fontSize: "inherit",
  },
};

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <Logo />
        <NavLinks />
        <Accessibility />
      </NavbarContainer>
      <NavWrapper>
        <BreakingNews>
          <div className="newsbox">
            <div className="newsitem">⚠️WARNING !!!⚠️</div>
            <div className="newsitem">
              👉Don't pay in advance, including for delivery
            </div>
            <div className="newsitem">
              👉 Meet the seller at a safe public place
            </div>
            <div className="newsitem">
              👉 Inspect the item and ensure it's exactly what you want
            </div>
            <div className="newsitem">
              👉 On delivery, check that the item delivered is what was
              inspected
            </div>
            <div className="newsitem">👉 Only pay when you're satisfied </div>
          </div>
        </BreakingNews>
        <CategorySection>
          <p>
            Categories <FontAwesomeIcon className="icons" icon={faBars} />
          </p>
          <LinkItem>
            <Link style={styles.a} to="/MarketPlace/AnimalsPage">
              Animals
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/MarketPlace/ChemicalPage">
              Agro-Chemicals
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/MarketPlace/FertilizerPage">
              Fertilizers
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/MarketPlace/BirdsPage">
              Poultry
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/MarketPlace/SeedlingsPage">
              Seeds
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/MarketPlace/FishingPage">
              Fishery
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/MarketPlace/FeedPage">
              Feeds
            </Link>
          </LinkItem>
          <LinkItem>
            <Link style={styles.a} to="/MarketPlace/EquipmentsPage">
              Agro-Equiments
            </Link>
          </LinkItem>
        </CategorySection>
      </NavWrapper>
    </>
  );
}
export default Navbar;
