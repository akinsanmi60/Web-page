import React from "react";
import { CounterWrapper } from "./style";
import users from "../../../../Storage/Userdetails";

function Counter() {
  return (
    <CounterWrapper>
      {users.map(item => (
        <div key={item.id} className="details">
          <p>{item.totalNumber}</p>
          <h1>Current Number of {item.title}</h1>
        </div>
      ))}
    </CounterWrapper>
  );
}

export default Counter;
