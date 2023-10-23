import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ handleExpense }) => {
  const [addForm, setAddForm] = useState(false);

  const handleAddForm = () => {
    setAddForm((prevState) => !prevState);
  };

  const handleSave = (expenseFormData) => {
    const data = {
      ...expenseFormData,
    };
    handleExpense(data);
  };

  return (
    <div className="new-expense">
      {addForm ? (
        <ExpenseForm handleAddForm={handleAddForm} handleSave={handleSave} />
      ) : (
        <button onClick={handleAddForm}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
