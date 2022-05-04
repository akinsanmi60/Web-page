import * as React from "react";
import { Link } from "react-router-dom";

type ButtonProp = {
  title: string;
  route: string;
};
const style = {
  btn: {
    width: " 160px",
    height: "50px",
    left: " 1153px",
    top: "36px",
    background: " #e8491d",
    borderRadius: " 4px",
    marginRight: "15px",
    outline: "none",
    color: "white",
    border: "none",
  },
};
function Button({ title, route }: ButtonProp) {
  return (
    <Link to={route}>
      <button style={style.btn} type="submit">
        {title}
      </button>
    </Link>
  );
}

export default Button;
