//@ts-check

import React, { useState } from "react"
import CoffeeMachine from "../classes/coffeeMachine";

/**
 * @typedef {Object} IngredientType
 * @property {number} value
 */

/**
 * @typedef {Object} Ingredient
 * @property {IngredientType} coffeeBeans
 * @property {IngredientType} milk
 * @property {IngredientType} water
 */

/**
 * Fill the coffee machine for the owner role
 * @returns {React.JSX.Element}
 */
const FillCoffeeMachine = () => {


    /**
     * The initial ingredients when the user load the page
     * @type {Ingredient}
     */
    const initialIngredients = {
        coffeeBeans: {
            value: 0
        },
        milk: {
            value: 0
        },
        water: {
            value: 0
        }
    };

    /** @type {[Ingredient, React.Dispatch<React.SetStateAction<Ingredient>>]} */
    const [ingredients, setIngredients] = useState(/** @type {Ingredient} */(initialIngredients));

    /** 
     * Set the new coffee beans value on change to the ingredients state
     * @type {React.ChangeEventHandler<HTMLInputElement>}
     */
    const setCoffeeBeansHandler = (e) => {
        const coffeeBeansValue = Number(e.target.value);
        setIngredients(prev => {
            return {
                ...prev,
                coffeeBeans: {
                    value: coffeeBeansValue
                }
            }
        });
    }

    /** 
     * Set the new milk value on change to the ingredients state
     * @type {React.ChangeEventHandler<HTMLInputElement>}
     */
    const setMilkHandler = (e) => {
        const milkValue = Number(e.target.value);
        setIngredients(prev => {
            return {
                ...prev,
                milk: {
                    value: milkValue
                }
            }
        });
    }

    /** 
     * Set the new water value on change to the ingredients state
     * @type {React.ChangeEventHandler<HTMLInputElement>}
     */
    const setWaterHandler = (e) => {
        const waterValue = Number(e.target.value);
        setIngredients(prev => {
            return {
                ...prev,
                water: {
                    value: waterValue
                }
            }
        });
    }

    /**
     * Submit and fill the coffee machine with the provided ingredients
     * @type {React.FormEventHandler<HTMLFormElement>}
     */
    const fillCoffeeMachineHandler = (e) => {
        e.preventDefault();

        const isError = Object.values(ingredients).some(ingredient => ingredient.value < 0);
        if (isError) return;

        CoffeeMachine.fill(
            ingredients.coffeeBeans.value,
            ingredients.milk.value,
            ingredients.water.value
        );

        setIngredients(initialIngredients);
    }

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium text-neutral-700">Fill The Coffee Machine</h2>
            <form noValidate onSubmit={fillCoffeeMachineHandler} className="flex flex-col gap-1">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="coffeeBeans">Coffee beans: (g)</label>
                        <input placeholder="e.g. 90" min={1} onChange={setCoffeeBeansHandler} value={ingredients.coffeeBeans.value || ""} type="number" name="coffeeBeans" id="coffeeBeans" className="border py-1 px-2 rounded border-slate-400 w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="milk">Milk: (ml)</label>
                        <input placeholder="e.g. 300" min={1} onChange={setMilkHandler} value={ingredients.milk.value || ""} type="number" name="milk" id="milk" className="border py-1 px-2 rounded border-slate-400 w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="water">Water: (ml)</label>
                        <input placeholder="e.g. 1200" min={1} onChange={setWaterHandler} value={ingredients.water.value || ""} type="number" name="water" id="water" className="border py-1 px-2 rounded border-slate-400 w-full" />
                    </div>
                </div>
                <button className="self-start bg-orange-700 text-white border py-2 px-3 font-medium rounded">Fill the coffee machine</button>
            </form>
        </div>
    )
}

export default FillCoffeeMachine