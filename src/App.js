import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "1",
      name: "Toilet Paper",
      amount: 2.75,
      date: new Date(2022, 8, 11),
    },
    {
      id: "2",
      name: "Car",
      amount: 7500,
      date: new Date(2022, 2, 3),
    },
    {
      id: "3",
      name: "Pen",
      amount: 1,
      date: new Date(2022, 1, 9),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
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
    </div>
  );
}

export default App;
