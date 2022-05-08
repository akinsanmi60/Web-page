import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import BlogNewsWrapper, { LinkItem } from "./style";
import { ReviewProp } from "./type";

function MainBlogPage() {
  const linkItems = [
    {
      title: "All News",
      path: "newsPage",
    },
    {
      title: "Article",
      path: "ExecutivesPage",
    },
  ];

  const [reviews, setReviews] = useState<ReviewProp[]>([]);

  useQuery(
    "newsapple",
    () =>
      axios.get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=06b7899a9978496cb06c46f663533dee`,
      ),
    {
      onSuccess(response) {
        setReviews(response?.data?.articles);
      },
      refetchOnWindowFocus: false,
    },
  );
  console.log("==**+++++++***==", reviews);
  return (
    <BlogNewsWrapper>
      <div className="blogwrapper">
        <div className="blogmain">
          <div className="content">
            <Outlet />
          </div>
        </div>
        <div className="sidebar">
          <div className="categorycontainer">
            <h1 className="connect">Categories</h1>
            {linkItems.map(linkAvailable => (
              <div key={linkAvailable.title}>
                <LinkItem>
                  <Link to={linkAvailable.path}> {linkAvailable.title}</Link>
                </LinkItem>
              </div>
            ))}
          </div>
          <div className="reviewcontainer">
            <h1 className="connect">Recent Reviews</h1>
            {reviews.slice(0, 4).map(review => (
              <div key={review.title}>
                <div className="newrecent">
                  <div className="image">
                    <img src={`${review.urlToImage}`} alt="" />
                  </div>
                  <div className="newtext">
                    <p>{review.title}</p>
                    <p>{review.publishedAt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlogNewsWrapper>
  );
}

export default MainBlogPage;
