import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import "./Expenses.css";

export function Expenses(props) {
  const [year, setYear] = useState("2020");
  const yearSetter = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={year} onChangeYear={yearSetter} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
