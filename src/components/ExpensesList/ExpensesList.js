import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredData }) => {
  if (filteredData.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {filteredData.map((data, index) => (
        <ExpenseItem key={index} expense={data} />
      ))}
    </ul>
  );
};

export default ExpensesList;
