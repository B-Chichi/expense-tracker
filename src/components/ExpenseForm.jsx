import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submit", formData)
      onAddExpense(formData);
      setFormData({
        name: "",
        description: "",
        category: "",
        amount: "",
        date: "",
      });
    };
  
  

    return (
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="h3">Add Expense</h3>,
        <p className="text">Enter your expense details below</p>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Expense Name"
        />
        ,
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        ,
        <input
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        ,
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
        />,
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        
        <button type="submit" className="button">
          Add Expense
        </button>
      </form>
    );
  }


export default ExpenseForm;
