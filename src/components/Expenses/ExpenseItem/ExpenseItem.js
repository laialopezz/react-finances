import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import Card from "../../Shared/Card/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [name, setName] = useState(props.name);
  const changeTitle = () => {
    setName("Hello");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={changeTitle}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
