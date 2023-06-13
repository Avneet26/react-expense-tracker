import { useState } from "react";
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

  return (
    <div className="App">
      <Header />
      <Dashboard />
      <History expenses={expenses} />
    </div>
  );
}

export default App;
