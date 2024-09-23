//@ts-check

import { coffeeIngredients } from "../helpers";
import Coffee from "./coffee";

/**
 * Make cappuccino coffee
 * @class
 * @classdesc A cappuccino class
 * @constructor Cappuccino
 * @extends Coffee
 */
class Cappuccino extends Coffee {
    constructor() {
        const { cappuccino } = coffeeIngredients
        super(
            cappuccino.coffeeBeans,
            cappuccino.milk,
            cappuccino.water,
            cappuccino.price
        );
    };

     /**
     * Make the cappuccino
     * @returns {string} Able or unable to make the cappuccino a status string is returned
     * @example 
     * - "cappuccino is ready" (able to make)
     * - "i can't make any more cappuccino" (unable to make)
     */
    maker() {
        return this.makeCoffee("cappuccino");
    };
};

export default Cappuccino;