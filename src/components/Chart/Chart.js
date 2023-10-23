import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ expenses }) => {
    const expenseValue = expenses.map(expense => expense.value)
    const monthMax = Math.max(...expenseValue)
  return (
    <div className="chart">
      {expenses.map((expense) => (
        <ChartBar
          key={expense.label}
          value={expense.value}
          max={monthMax}
          label={expense.label}
        />
      ))}
    </div>
  );
};

export default Chart;
