import React from "react";

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Expenses</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((name,amount,category,description,date) => (
          <tr key={index}>
            <td>{name}</td>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{category}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
