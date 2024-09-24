//@ts-check

import { coffeeIngredients } from "../helpers";
import Coffee from "./coffee";

/**
 * Make latte coffee
 * @class
 * @classdesc A latte class
 * @constructor Latte
 * @extends Coffee
 */
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
        return this._makeCoffee("latte");
    }
};

export default Latte;