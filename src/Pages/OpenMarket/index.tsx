import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import Logo from "../../Common/Logo/Logo";
import {
  BreakingNews,
  LinkItem,
  MainWrapper,
  MarketHeader,
  MarketWrapper,
} from "./style";

function MarketPage() {
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null!);
  const linkItems = [
    {
      title: "Animals",
      path: "AnimalsPage",
    },
    {
      title: "Agro-Chemicals",
      path: "ChemicalPage",
    },
    {
      title: "Fertilizers",
      path: "FertilizerPage",
    },
    {
      title: "Seeds",
      path: "SeedlingsPage",
    },
    {
      title: "Poultry",
      path: "BirdsPage",
    },
    {
      title: "Fishery",
      path: "FishingPage",
    },
    {
      title: "Feeds",
      path: "FeedPage",
    },
    {
      title: "Agro-Equipment",
      path: "EquipmentsPage",
    },
  ];
  return (
    <MarketWrapper>
      <MarketHeader>
        <div>
          <Logo />
        </div>
        <div className="input-container">
          <form>
            <input
              type="text"
              id="letters"
              ref={searchRef}
              autoComplete="off"
              onChange={e => setSearch(e.target.value)}
              value={search}
              required
            />
            <Button
              size="medium"
              variant="contained"
              sx={{
                backgroundColor: " #e8491d",
                marginTop: "-3px",
                height: "37px",
                "&:hover": {
                  backgroundColor: "#e8491d",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
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
      </MarketHeader>
      <MainWrapper>
        <BreakingNews>
          <div className="newsbox">
            <div className="newsitem">⚠️WARNING !!!⚠️</div>
            <div className="newsitem">
              👉 Don't pay in advance, including for delivery
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
        <div className="marketBox">
          <div className="linkcontainer">
            {linkItems.map(availableLink => (
              <div className="connect" key={availableLink.title}>
                <LinkItem>
                  <Link to={availableLink.path}>{availableLink.title}</Link>
                </LinkItem>
              </div>
            ))}
          </div>
          <div className="outletcontainer">
            <div className="content">
              <Outlet />
            </div>
          </div>
        </div>
      </MainWrapper>
    </MarketWrapper>
  );
}

export default MarketPage;
