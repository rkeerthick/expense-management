import React from "react";
import './ExpenseDate.css'

const ExpenseDate = ({ data }) => {
  const month = data.toLocaleString('en-US', { month: 'long' });
  const day = data.toLocaleString('en-US', { day: '2-digit' });
  const year = data.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
