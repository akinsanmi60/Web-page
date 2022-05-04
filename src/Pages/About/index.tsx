import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LinkItem, AboutWrapper } from "./style";

function AboutPage() {
  const linkItems = [
    {
      title: "Company Overview",
      path: "CompanyOverviewPage",
    },
    {
      title: "Team- Member",
      path: "ExecutivesPage",
    },
    {
      title: "Statement",
      path: "ChoosePage",
    },
  ];
  return (
    <AboutWrapper>
      <div className="aboutBox">
        <div className="linkcontainer">
          {linkItems.map(linkAvailable => (
            <div className="connect" key={linkAvailable.title}>
              <LinkItem>
                <Link to={linkAvailable.path}> {linkAvailable.title}</Link>
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
    </AboutWrapper>
  );
}

export default AboutPage;
