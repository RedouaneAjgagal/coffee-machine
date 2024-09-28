//@ts-check

import React, { useState } from "react"
import CoffeeMachine from "../classes/coffeeMachine"

/**
 * Take money from the coffee machine for the owner role
 * @returns {React.JSX.Element}
 */
const TakeMoney = () => {
    const [machineMoney, setMachineMoney] = useState(CoffeeMachine.totalMoney);

    /**
     * Take money from the coffee machine
     * @returns {void}
     */
    const takeCoffeeMachineMoneyHandler = () => {
        if (!isMoneyInTheMachine) return;

        CoffeeMachine.takeMoney();
        setMachineMoney(CoffeeMachine.totalMoney);
    }

    const isMoneyInTheMachine = machineMoney > 0;

    return (
        <div className="py-4">
            <button onClick={takeCoffeeMachineMoneyHandler} disabled={!isMoneyInTheMachine} className={`${isMoneyInTheMachine ? "bg-green-600" : "bg-green-500/60"} text-white font-medium w-full p-2 rounded uppercase`}>{`Take Coffee Machine Money ($${machineMoney.toFixed(2)})`}</button>
        </div>
    )
}

export default TakeMoney