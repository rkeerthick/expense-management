import React, { useState } from "react";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpenseChart from "../Chart/ExpenseChart";

const Expenses = ({ datas }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const handleYearChange = (year) => {
    setFilteredYear(year);
  };

  const filteredData = datas.filter((expense) => {
    const date = expense.date;
    console.log(typeof(date))
    return date.getFullYear().toString() === filteredYear;
  })
  

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          filteredYear={filteredYear}
          handleYearChange={handleYearChange}
        />
        <ExpenseChart expenses={filteredData} />
        <ExpensesList filteredData={filteredData} />
      </Card>
    </>
  );
};

export default Expenses;
