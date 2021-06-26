import React from "react";

export default function TransactionHistory({ value }) {
  let { logName, amount } = value;
  if (amount >= 0) {
    return (
      <>
        <div className="card-2">
          <div>{logName}</div>
          <div className="indicator">
            <div>${amount}</div>
            <div className="color-marker-green"></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card-2">
          <div>{logName}</div>
          <div className="indicator">
            <div>${amount}</div>
            <div className="color-marker-red"></div>
          </div>
        </div>
      </>
    );
  }
}
