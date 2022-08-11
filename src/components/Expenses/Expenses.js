import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "./../Shared/Card/Card";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseItem
        date={expenses[0].date}
        name={expenses[0].name}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        name={expenses[1].name}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        name={expenses[2].name}
        amount={expenses[2].amount}
      />
    </Card>
  );
}

export default Expenses;
