/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Header from "../Common/JobBlog/HeaderNav";
import Footer from "../Common/JobBlog/Footernav";

const Layoutjob: React.FC = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
export default Layoutjob;
