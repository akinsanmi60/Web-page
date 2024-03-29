/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import ReactPaginate from "react-paginate";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactComponent as LoadingLP } from "../../../../Assets/Fast loading-amico.svg";
import Postcard from "../Post-item";
import Wrapper, { EmptyData } from "./style";
import { PostProp } from "./type";

const styles = {
  logo: {
    width: "100%",
    height: " 200px",
    marginTop: "20px",
  },
};
function AllBlogPage() {
  const [posts, setPosts] = useState<PostProp[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  const postPerPage = 4;
  const pagesVisited = pageNumber * postPerPage;
  // setting the pageCount in number
  const pageCount = Math.ceil(posts.length / postPerPage);
  // enable to change page number
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayPost = posts
    ?.slice(pagesVisited, pagesVisited + postPerPage)
    .map(post => (
      <div key={post.title}>
        <Postcard post={post} />
      </div>
    ));

  const { isLoading, isError, isIdle } = useQuery(
    "news",
    () =>
      axios.get(
        `https://newsapi.org/v2/everything?q=apple&from=2022-05-07&to=2022-05-07&sortBy=popularity&apiKey=06b7899a9978496cb06c46f663533dee`,
      ),
    {
      onSuccess(e) {
        setPosts(e?.data?.articles);
      },
      refetchOnWindowFocus: false,
    },
  );

  return (
    <Wrapper>
      <div className="postwrapper">
        {isLoading ? (
          <EmptyData>
            <CircularProgress />
            <LoadingLP style={styles.logo} />
            <Typography>Oops!, No news to display</Typography>
          </EmptyData>
        ) : isError ? (
          <EmptyData>
            <LoadingLP style={styles.logo} />
            <Typography>Oops!, Something went wrong while loading</Typography>
          </EmptyData>
        ) : (
          <div>
            <div className="postpage">{displayPost}</div>
            <div className="select-btn">
              <ReactPaginate
                previousLabel="<<<"
                nextLabel=">>>"
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName="paginationBttns"
                previousLinkClassName="previousBttn"
                nextLinkClassName="nextBttn"
                disabledClassName="paginationDisabled"
                activeClassName="paginationActive"
              />
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default AllBlogPage;
