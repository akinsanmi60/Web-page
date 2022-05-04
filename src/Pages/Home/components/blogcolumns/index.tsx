/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router";
import { BlogWrapper } from "./style";
import Recentnews from "../../../../Storage/Newsdetails";
import Recentjobs from "../../../../Storage/Jobdetails";
import News from "./Recent";
import Jobs from "./Jobs";

function Blog() {
  const navigate = useNavigate();
  return (
    <BlogWrapper>
      <div className="current-news">
        <div className="title">
          <h1 className="chart-inner-title">Latest Blog-Post</h1>
          <span
            role="button"
            tabIndex={0}
            style={{
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 400,
              color: " white",
              marginTop: "6px",
            }}
            onClick={() => navigate("/Blog")}
          >
            ... view more
          </span>
        </div>
        <News Recentnews={Recentnews} />
      </div>
      <div className="jobs">
        <div className="title">
          <h1 className="chart-inner-title">Latest Job</h1>
          <span
            role="button"
            tabIndex={0}
            style={{
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 400,
              color: "white",
              marginTop: "6px",
            }}
            onClick={() => navigate("/Career")}
          >
            ... view more
          </span>
        </div>

        <Jobs Recentjobs={Recentjobs} />
      </div>
    </BlogWrapper>
  );
}

export default Blog;
