import React from "react";
import "./App.css";
import { useGlobalContext } from "./context";
export default function ExpenseIncomeCard() {
  let { expense, income } = useGlobalContext();
  return (
    <div className="card-1 dp04">
      <div className="left">
        <h4>
          INCOME <br></br> <span className="green">${income}</span>
        </h4>
      </div>
      <hr className="middle-line"></hr>
      <div className="right">
        <h4>
          EXPENSE <br></br> <span className="red">${expense}</span>
        </h4>
      </div>
    </div>
  );
}
