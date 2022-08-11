import Expenses from "./components/Expenses/Expenses";

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
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
