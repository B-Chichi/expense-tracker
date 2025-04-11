import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="main">
      <div className="form">
        <ExpenseForm onAddExpense={addExpense} />
      </div>
      <div className="table">
        <div className="bar">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        </div>
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </main>
  );
}

export default App;
