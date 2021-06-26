import React, { useState, useContext } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);
  let [log, setLog] = useState([{ logName: "Enter a value", amount: 0 }]);
  const updateIncome = (value) => {
    if (value > 0) {
      let newIncome = income + value;
      setIncome(newIncome);
    } else {
      let newLoss = expense + value;
      setExpense(newLoss);
    }
  };
  const updateLog = (logName, amount) => {
    if (log[0].logName === "Enter a value") {
      log.shift();
    }
    let newlog = { logName: logName, amount: amount };
    let updatedLog = [...log, newlog];
    setLog(updatedLog);
  };
  return (
    <AppContext.Provider
      value={{
        income,
        setIncome,
        expense,
        setExpense,
        log,
        setLog,
        updateIncome,
        updateLog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };
