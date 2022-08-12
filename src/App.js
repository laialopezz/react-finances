import CreateExpense from "./components/Expenses/CreateExpense/CreateExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <CreateExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
