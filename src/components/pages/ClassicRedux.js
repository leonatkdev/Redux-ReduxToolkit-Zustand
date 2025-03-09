import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ClassicRedux = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>ClassicRedux</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT'})}>Decrise</button>
    </div>
  );
};

export default ClassicRedux;
