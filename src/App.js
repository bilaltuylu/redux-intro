import React from "react";
import Counter from "./components/Counter";
import IncreaserCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";

function App() {
  return (
    <div>
      <Counter />
      <IncreaserCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
    </div>
  );
}

export default App;
