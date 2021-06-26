import React, { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./context";

export default function TransactionForm() {
  let [name, setName] = useState("");
  let [value, setValue] = useState(0);
  let { updateLog, updateIncome } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLog(name, value);
    let a = parseInt(value);
    updateIncome(a);
  };
  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <label htmlFor="log-name">Text</label>
      <br></br>
      <input
        type="text"
        id="log-name"
        placeholder="Enter text"
        name="log-name"
        className="log-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br></br>
      <label htmlFor="amount">Value</label>
      <br></br>
      <input
        type="number"
        id="amount"
        placeholder="0.00"
        name="amount"
        className="amount"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="button">
        Add Transaction
      </button>
    </form>
  );
}
