//@ts-check
import React, { useEffect, useState } from "react";
import { RegularCoffee, Espresso, Latte, CoffeeMachine } from "./classes";

const App = () => {

  // const [rerender, setIsRerender] = useState(false);

  const [message, setMessage] = useState("Let's make coffee");

  const regularCoffee = new RegularCoffee();
  const espressoCoffee = new Espresso();
  const latteCoffee = new Latte();

  const makeEspresso = () => {
    const message = espressoCoffee.maker();
    coffeeMachineLogger();
    setMessageHandler(message);
  };

  const makeLatte = () => {
    const message = latteCoffee.maker();
    coffeeMachineLogger();
    setMessageHandler(message);
  };

  const setMessageHandler = (message) => {
    setMessage(message);
  }

  const coffeeMachineLogger = () => {
    console.log({
      milk: CoffeeMachine.totalMilk,
      water: CoffeeMachine.totalWater,
      coffeeBeans: CoffeeMachine.totalCoffeeBeans,
      money: CoffeeMachine.totalMoney,
    });
  }

  coffeeMachineLogger();

  return (
    <div className="p-4 flex gap-4">
      <button onClick={makeEspresso} className="bg-stone-700 text-white p-3 rounded">Make Espresso</button>
      <button onClick={makeLatte} className="bg-amber-800 text-white p-3 rounded">Make Latte</button>

      <div>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default App