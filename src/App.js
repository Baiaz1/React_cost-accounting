import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

function App() {
  const INITIAL_COSTS = [
    {
      date: new Date(2021, 2, 12),
      description: 'Laptop',
      amount: 1200.79,
      id: 'c1',
    },
    {
      date: new Date(2022, 12, 30),
      description: 'Car',
      amount: 24000,
      id: 'c2',
    },
    {
      date: new Date(2023, 1, 2),
      description: 'Headphones',
      amount: 25.50,
      id: 'c3',
    },
]

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => [cost, ...prevCosts])
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
