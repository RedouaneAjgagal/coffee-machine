//@ts-check

import React, { useState } from "react";
import RegularCoffee from "../classes/regularCoffee";
import { useContext } from "react";
import { CoffeeMachineContext } from "../store/CoffeeMachineState";

/**
 * @typedef {import("../classes/regularCoffee").AmountOfCupsReturns} AmountOfCupsReturns
 */

/**
 * Make a regular coffee for the owner role
 * @returns {React.JSX.Element}
 */
const MakeRegularCoffeeForm = () => {
    const coffeeMachineCtx = useContext(CoffeeMachineContext);

    /** @type {[number, React.Dispatch<React.SetStateAction<number>>]} */
    const [amountOfCups, setAmountOfCups] = useState(0);


    /** @type {[AmountOfCupsReturns, React.Dispatch<React.SetStateAction<AmountOfCupsReturns>>]} */
    const [amountOfCupsReturns, setAmountOfCupsReturns] = useState(/** @type {AmountOfCupsReturns} */({ isAvailableCups: false, message: "" }));

    /**
     * A form to check if the provided cups can be made based on the coffee machine ingredients
     * @type {React.FormEventHandler<HTMLFormElement>}
     */
    const checkIfAvailableCupsHandler = (e) => {
        e.preventDefault();

        const cupsValue = Number(e.currentTarget.elements["amoutOfCups"]?.value || 0);

        if (!cupsValue || cupsValue < 1) return;
        if (!Number.isInteger(cupsValue)) return;

        const regularCoffee = new RegularCoffee();
        const amountOfCupsResponse = regularCoffee.amountOfCups(cupsValue);
        setAmountOfCupsReturns(amountOfCupsResponse);
        setAmountOfCups(cupsValue);
    }

    /**
     * A form to make the amount of cups provided
     * @type {React.MouseEventHandler<HTMLButtonElement>}
     */
    const makeRegularCupsHandler = () => {
        if (!amountOfCupsReturns.isAvailableCups) return;

        const regularCoffee = new RegularCoffee();
        const makerResponse = regularCoffee.maker(amountOfCups);

        setAmountOfCupsReturns(makerResponse);
        coffeeMachineCtx.onChange();
    }

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium text-neutral-700">Make Regular Coffee</h2>
            <form onSubmit={checkIfAvailableCupsHandler} className="flex flex-col gap-1">
                <label htmlFor="amoutOfCups" className="text-slate-600">Amount of cups you want to make:</label>
                <input id="amoutOfCups" name="amoutOfCups" type="number" min={1} className="border py-1 px-2 rounded border-slate-400" />
                <button className="self-start bg-orange-700 text-white border py-2 px-3 font-medium rounded">Check if available</button>
            </form>
            {amountOfCupsReturns.message !== ""
                ? <article className={`py-2 px-3 rounded flex flex-col gap-1 ${amountOfCupsReturns.isAvailableCups ? "bg-green-300/30 text-green-600 " : "bg-red-300/30 text-red-600 "}`}>
                    <span>{amountOfCupsReturns.message}</span>
                    {amountOfCupsReturns.isAvailableCups
                        ? <button className="bg-green-600 text-white font-medium p-2 rounded uppercase" onClick={makeRegularCupsHandler}>Make {amountOfCups} cups of coffee</button>
                        : null
                    }
                </article>
                : null
            }
        </div>
    )
}

export default MakeRegularCoffeeForm