//@ts-check

import { coffeeIngredients } from "../helpers";
import Coffee from "./coffee";

class Espresso extends Coffee {
    constructor() {
        const { espresso } = coffeeIngredients;
        super(
            espresso.coffeeBeans,
            espresso.milk,
            espresso.water,
            espresso.price
        );
    }

     /**
     * Make the espresso
     * @returns {string} Able or unable to make the espresso a status string is returned
     * @example 
     * - "espresso is ready" (able to make)
     * - "i can't make any more espresso" (unable to make)
     */
    maker() {
        return this.makeCoffee("espresso");
    };
};

export default Espresso;