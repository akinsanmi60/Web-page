/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Navbar from "../Common/Navabar";
import Footer from "../Pages/Home/components/footer";

const Wrapper: React.FC = props => (
  <>
    <Navbar />
    {props.children}
    <Footer />
  </>
);
export default Wrapper;
