//@ts-check

import Coffee from "./coffee";
import { coffeeIngredients } from "../helpers";

/**
 * @typedef {Object} AmountOfCupsReturns
 * @property {string} message a status message depends on the provided amount of cups if they are available or not based on the machine ingredients
 * @property {boolean} isAvailableCups if the cups available then return true else false 
 */

/**
 * Make regular coffee
 * @class
 * @classdesc A regular coffee class
 * @extends Coffee
 * @constructor RegularCoffee
 */
class RegularCoffee extends Coffee {
    constructor() {
        const { regularCoffee } = coffeeIngredients;
        super(
            regularCoffee.coffeeBeans,
            regularCoffee.milk,
            regularCoffee.water,
            regularCoffee.price
        );
    }

    /**
     * Check if the coffee machine has enough ingredients to make the provided amount of cups
     * @param {number} cups amount of cups the user wants to make
     * @returns {AmountOfCupsReturns}
     */
    amountOfCups(cups) {
        const availableCups = this._availableCups();
        const isAvailableCups = availableCups >= cups;

        let message = "";
        if (isAvailableCups) {
            const manyCupsLeft = availableCups - cups;

            message = `Yes, I can make that amount of coffee${manyCupsLeft !== 0 ? ` (and even ${manyCupsLeft} more than that)` : ""}`;
        } else {
            message = `No, ${availableCups !== 0 ? `I can make only up to ${availableCups} cups of coffee` : "I can't make any more coffee"} `;
        }

        return {
            message,
            isAvailableCups
        };
    }

    /**
     * Make many regular coffee cups at once
     * @param {number} cups the amount of cups the user wants to make at once
     * @returns {AmountOfCupsReturns} a status message and a boolean depends on the provided amount of cups if they are available or not based on the machine ingredients
     */
    maker(cups) {
        const amountOfCupsResponse = this.amountOfCups(cups);

        if (!amountOfCupsResponse.isAvailableCups) return amountOfCupsResponse;

        this._makeCoffee("regular coffee", cups);

        const successMessage = `Successfully made ${cups} cups of coffee`;
        return {
            message: successMessage,
            isAvailableCups: amountOfCupsResponse.isAvailableCups
        };
    }
};

export default RegularCoffee;


