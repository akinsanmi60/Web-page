/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Header from "../Common/Blogwrapper/Headnav/blogheader";
import Footer from "../Common/Blogwrapper/Footernav/blogfooter";

const Layoutnew: React.FC = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
export default Layoutnew;
