//@ts-check

import React, { useContext, useState } from "react"
import Espresso from "../classes/espresso";
import Cappuccino from "../classes/cappuccino";
import Latte from "../classes/latte";
import { CoffeeMachineContext } from "../store/CoffeeMachineState";
import { coffeeIngredients } from "../helpers";

/**
 * The coffee type the machine can make
 * @typedef {"espresso" | "latte" | "cappuccino"} CoffeeType
 */

/**
 * Buy coffee (espresso, cappuccino or latte) for the customer role
 * @returns {React.JSX.Element}
 */
const BuyCoffee = () => {
    const coffeeMachineCtx = useContext(CoffeeMachineContext);

    /** @type {[CoffeeType, React.Dispatch<React.SetStateAction<CoffeeType>>]} */
    const [coffeeType, setCoffeeType] = useState(/** @type {CoffeeType} */("espresso"));

    /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} */
    const [buyResponse, setBuyResponse] = useState("");

    /**
     * @type {readonly ["espresso", "latte", "cappuccino"]}
     */
    const coffeeTypes = ["espresso", "latte", "cappuccino"];

    const coffeeTypeButtons = coffeeTypes.map((coffee, index) => {
        /**
         * Select the coffee that you want to buy
         * @type {React.ChangeEventHandler<HTMLInputElement>}
         */
        const selectCoffeeTypeHandler = () => {
            setCoffeeType(coffee);
        }

        /**
         * A checker to check if the selected type of coffee match
         * @type {boolean}
         */
        const isChecked = coffee === coffeeType;

        const label = `${coffee} ($${coffeeIngredients[coffee].price.toFixed(2)})`;

        return (
            <div key={index}>
                <label aria-selected={isChecked} htmlFor={coffee} className={`hover:cursor-pointer flex justify-center border-2 rounded py-2 px-4 font-medium capitalize ${isChecked ? "border-neutral-500 text-neutral-700" : "border-neutral-300 text-neutral-500"}`}>{label}</label>
                <input className="sr-only" type="radio" name="coffee type" id={coffee} value={coffee} onChange={selectCoffeeTypeHandler} checked={isChecked} />
            </div>
        )
    });

    /**
     * Buy the coffee type that has been selected 
     * @type {React.MouseEventHandler<HTMLButtonElement>}
     */
    const buyCoffeeHandler = () => {
        let response = "";

        switch (coffeeType) {
            case "espresso":
                const espresso = new Espresso();
                const espressoResponse = espresso.maker();
                response = espressoResponse;
                break;

            case "cappuccino":
                const cappuccino = new Cappuccino();
                const cappuccinoResponse = cappuccino.maker();
                response = cappuccinoResponse;
                break;
            case "latte":
                const latte = new Latte();
                const latteResponse = latte.maker();
                response = latteResponse;
                break;
            default:
                response = "Unable to make the coffee. Please select a valid coffee type"
                break;
        }

        setBuyResponse(response);
        coffeeMachineCtx.onChange();
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-medium text-neutral-700">Buy Coffee</h2>
            <div className="w-1/2 m-auto flex flex-col gap-2">
                <fieldset className="flex justify-center gap-4">
                    {coffeeTypeButtons}
                </fieldset>
                {buyResponse !== ""
                    ? <article aria-label="Status message for buying coffee" className="p-4 bg-neutral-300/30">
                        <p className="text-neutral-600">{buyResponse}</p>
                    </article>
                    : null
                }
                <div className="w-full">
                    <button onClick={buyCoffeeHandler} className="w-full bg-amber-600 text-white font-medium py-2 px-4 rounded capitalize">{`buy ${coffeeType}`}</button>
                </div>
            </div>
        </div>
    )
}

export default BuyCoffee