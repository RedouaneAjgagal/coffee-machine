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
        <section aria-label="Coffee machine information" className="grid grid-cols-4 bg-stone-400/20 rounded py-4 px-6">
            <div className="col-span-1">
                <h3 className="font-medium">Coffee Beans</h3>
                <output aria-label="amount of coffee beans the coffee machine has in gram">{CoffeeMachine.totalCoffeeBeans} g</output>
            </div>
            <div className="col-span-1">
                <h3 className="font-medium">Milk</h3>
                <output aria-label="amount of milk the coffee machine has in ml">{CoffeeMachine.totalMilk} ml</output>
            </div>
            <div className="col-span-1">
                <h3 className="font-medium">Water</h3>
                <output aria-label="amount of water the coffee machine has in ml">{CoffeeMachine.totalWater} ml</output>
            </div>
            <div className="col-span-1">
                <h3 className="font-medium">Money</h3>
                <output aria-label="total money the coffee machine has">${CoffeeMachine.totalMoney.toFixed(2)}</output>
            </div>
        </section>
    )
}

export default React.memo(CoffeeMachineState);