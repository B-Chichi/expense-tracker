import React,{ useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {

  const [expenses, setExpenses] = useState([])
  const addExpense = (newExpense) => {
    setExpenses((prev)=>[...prev,newExpense])
  }
  



  return (
    <main className="main">
      <div className="form">
        <ExpenseForm onAddExpense={addExpense} />
      </div>
      <div className="table">
        <div className="bar">
          <SearchBar />
        </div>
        <ExpenseTable expenses={expenses} />
      </div>
    </main>
  );
}

export default App;
