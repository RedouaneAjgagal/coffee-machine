//@ts-check

import { coffeeIngredients } from "../helpers";
import Coffee from "./coffee";

class Latte extends Coffee {
    constructor() {
        const { latte } = coffeeIngredients;
        super(
            latte.coffeeBeans,
            latte.milk,
            latte.water,
            latte.price
        );
    }

    /**
     * Make the latte
     * @returns {string} Able or unable to make the latte a status string is returned
     * @example 
     * - "latte is ready" (able to make)
     * - "i can't make any more latte" (unable to make)
     */
    maker() {
        return this.makeCoffee("latte");
    }
};

export default Latte;