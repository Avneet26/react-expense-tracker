import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import History from "./Components/History";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Salary", amount: 500 },
    { id: 2, name: "Food", amount: -45 },
    { id: 3, name: "Rent", amount: -250 },
    { id: 4, name: "Stocks", amount: 350 },
  ]);

  const [balance, setBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleCalculation = () => {
    let balance = 0;
    let totalIncome = 0;
    let totalExpense = 0;

    expenses.forEach((expense) => {
      if (expense.amount > 0) {
        totalIncome += expense.amount;
      } else {
        totalExpense += expense.amount;
      }
    });

    balance = totalIncome + totalExpense;
    return {balance, totalIncome, totalExpense};
  };

  useEffect(() => {
    console.log(handleCalculation());
  }, [expenses]);

  return (
    <div className="App">
      <Header />
      <Dashboard />
      <History expenses={expenses} />
    </div>
  );
}

export default App;
