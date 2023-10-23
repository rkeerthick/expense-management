import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ handleAddForm, handleSave }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: {},
  });

  const handleExpenseChange = (e) => {
    setExpense((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(expense);
    handleAddForm();
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleExpenseChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            name="amount"
            value={expense.amount}
            onChange={handleExpenseChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            name="date"
            value={expense.date}
            onChange={handleExpenseChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={handleAddForm}>Cancel</button>
        <button onClick={handleSubmit} type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
