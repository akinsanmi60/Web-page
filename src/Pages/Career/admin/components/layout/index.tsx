import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ReactComponent as EmptyBoard } from "../../../../../Assets/empty_news.svg";
// API routes
import Wrapper, { Button } from "./style";
import JobListings from "../Card";
import data from "../../../data";

type FormData = {
  email: string;
};

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const schema = yup
  .object({
    email: yup
      .string()
      .matches(EMAIL_REGEX, "Please enter a valid email address")
      .required(),
  })
  .required();

function BoardLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // const [activeItem, setActiveItem] = useState(null);

  const getUpdate = details => {
    console.log("++++++", details);
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="instruction">
          <div className="alertwrapper">
            <div className="alert">
              <div className="alertbox">
                <div className="alertform">
                  <form onSubmit={handleSubmit(getUpdate)}>
                    <label htmlFor="update">Get jobs update regularly</label>
                    <input
                      type="text"
                      id="email"
                      autoComplete="off"
                      required
                      {...register("email")}
                      {...(errors.email && "Email is required")}
                    />
                    <Button type="submit">Send</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="waringwrapper">
            <div>Disclaimer</div>
          </div>
        </div>
        <div className="jobload">
          {data && data.length > 0 ? (
            <JobListings
              {...{
                data,
              }}
            />
          ) : (
            <div className="empty-board">
              <EmptyBoard />
              <p>Oops!</p>
              <h2>No posted yet!</h2>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default BoardLayout;
