import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const datas = [
  {
    id: "1",
    date: new Date(2022, 9, 6),
    title: "Item 1",
    amount: "10.99",
  },
  {
    id: "2",
    date: new Date(2022, 4, 9),
    title: "Item 2",
    amount: "5.99",
  },
  {
    id: "3",
    date: new Date(2021, 11, 10),
    title: "Item 3",
    amount: "15.99",
  },
  {
    id: "4",
    date: new Date(2019, 0, 22),
    title: "Item 4",
    amount: "8.99",
  },
  {
    id: "5",
    date: new Date(2020, 7, 14),
    title: "Item 5",
    amount: "12.99",
  },
];
function App() {
  const [expenses, setExpenses] = useState(datas);

  const handleExpense = (expense) => {
    setExpenses(prevState => [...prevState, expense]);
  };


  return (
    <>
      <NewExpense handleExpense={handleExpense} />
      <Expenses datas={expenses} />;
    </>
  );
}

export default App;
