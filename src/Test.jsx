import React, { useReducer } from "react";
import { useReducerPorvider } from "./ReducerProvider";
export default function Test() {
  const { Reducer } = useReducerPorvider();
  const [state, disbatch] = useReducer(Reducer, null);
  return (
    <div>
        <button
          onClick={() => {
            disbatch({ type: "test", payload: { number1: 1, number2: 2 } });
          }}
        >
            Add
        </button>
        <h1> {state}</h1>
    </div>
  );
}
