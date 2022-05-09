import React from "react";
import moment from "moment";
import Wrapper from "./style";
import { PostcardProp } from "./type";

function Chip({ label }) {
  return <p className="chip">{label}</p>;
}

export default function Postcard({ post }: PostcardProp) {
  return (
    <Wrapper>
      <div className="blogitem-box">
        <div className="blogItem-wrap">
          <img
            className="blogItem-cover"
            src={`${post.urlToImage}`}
            alt="cover"
          />
          <Chip label={post.category} />
          <h3>{post.title}</h3>
          <p className="blogItem-desc">{post.description}</p>
          <footer>
            <div className="blogItem-author">
              <div>
                <h6>{post.author}</h6>
                <p>
                  <span>{moment(`${post.publishedAt}`).format("LL")}</span>
                  <span>{moment(`${post.publishedAt}`).format("LT")}</span>
                </p>
              </div>
            </div>
            {/* <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link> */}
          </footer>
        </div>
      </div>
    </Wrapper>
  );
}
