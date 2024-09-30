//@ts-check

import React, { useContext, useEffect } from "react"
import CoffeeMachine from "../classes/coffeeMachine"
import { CoffeeMachineState as CoffeeMachineStateCtx } from "../store"
import { CoffeeMachineContext } from "../store/CoffeeMachineState";

/**
 * Display the coffee machine ingredients
 * @returns {React.JSX.Element}
 */
const CoffeeMachineState = () => {
    useContext(CoffeeMachineContext); // to rerender whenever the coffee machine state change

    return (
        <section className="grid grid-cols-4 bg-stone-400/20 rounded py-4 px-6">
            <div className="col-span-1">
                <h3 className="font-medium">Coffee Beans</h3>
                <span>{CoffeeMachine.totalCoffeeBeans} g</span>
            </div>
            <div className="col-span-1">
                <h3 className="font-medium">Milk</h3>
                <span>{CoffeeMachine.totalMilk} ml</span>
            </div>
            <div className="col-span-1">
                <h3 className="font-medium">Water</h3>
                <span>{CoffeeMachine.totalWater} ml</span>
            </div>
            <div className="col-span-1">
                <h3 className="font-medium">Money</h3>
                <span>${CoffeeMachine.totalMoney.toFixed(2)}</span>
            </div>
        </section>
    )
}

export default React.memo(CoffeeMachineState);