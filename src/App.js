import React from "react";
import "./App.css";
import ExpenseIncomeCard from "./ExpenseIncomeCard";
import TransactionHistory from "./TransactionHistory";
import TransactionForm from "./TransactionForm";
import { useGlobalContext } from "./context.js";

function App() {
  let { income, expense, log } = useGlobalContext();
  return (
    <>
      <main className="wrapper">
        <h3>Expense Tracker</h3>
        <article>
          <div className="upper">
            <h4>
              Your Balance <br></br>${income + expense}
            </h4>
          </div>
          <ExpenseIncomeCard />
          <h4>History</h4>
          <hr></hr>
          {log.map(({ logName, amount }) => {
            return <TransactionHistory value={{ logName, amount }} />;
          })}
          <h4>Add new Transaction</h4>
          <hr></hr>
          <TransactionForm></TransactionForm>
        </article>
      </main>
    </>
  );
}

export default App;
