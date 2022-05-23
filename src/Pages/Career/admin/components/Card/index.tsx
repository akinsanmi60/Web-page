import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ReactPaginate from "react-paginate";
// components
import JobCard from "./component";
import { ListingProp } from "./type";
import Wrapper from "./style";

function JobListings(props) {
  const { data, isLoading }: ListingProp = props;
  const [pageNumber, setPageNumber] = useState(0);

  const postPerPage = 6;
  const pagesVisited = pageNumber * postPerPage;
  // setting the pageCount in number
  const pageCount = Math.ceil(data.length / postPerPage);
  // enable to change page number
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayJobs = data
    ?.slice(pagesVisited, pagesVisited + postPerPage)
    .map((item, i) => (
      <div key={item.position}>
        <JobCard {...{ item, i, props }} />
      </div>
    ));

  return (
    <Wrapper>
      {isLoading ? (
        <CircularProgress size={50} color="inherit" />
      ) : (
        <div>
          {displayJobs}
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
    </Wrapper>
  );
}

export default JobListings;
