//@ts-check

import CoffeeMachine from "./coffeeMachine";

/**
 * A class for making the correct coffee based on the coffee type and it's ingredients
 * @class
 */
class Coffee {
    /**
     * @param {number} coffeeBeans The amount of coffee beans in g
     * @param {number} water The amount of water in ml
     * @param {number} milk The amount of water in ml
     * @param {number} price The coffee cost
     */
    constructor(coffeeBeans, milk, water, price) {
        this.coffeeBeans = coffeeBeans;
        this.milk = milk;
        this.water = water;
        this.price = price;
    }

    /**
     * The amount of cups available based on the coffee type
     * @returns {number} Available cups
     */
    availableCups() {
        return CoffeeMachine.availableCups(this.coffeeBeans, this.water, this.milk);
    }

    /**
     * Make coffee with how many cups and consume the coffee machine ingredients
     * @param {"regular coffee" | "espresso" | "latte" | "cappuccino"} coffeeType The coffee type (e.g. espresso - latte)
     * @param {number} cups The amount of cups to make at once (default: 1)
     * @returns {string} Able or unable to make that amount of cups a message string is returned
     */
    makeCoffee(coffeeType, cups = 1) {
        const availableCups = this.availableCups() >= cups;

        if (!availableCups) return `I can't make any more ${coffeeType}`;

        CoffeeMachine.consumeRessources(
            this.coffeeBeans * cups,
            this.water * cups,
            this.milk * cups,
            this.price * cups
        );

        const successMessage = `${coffeeType} is ready`;
        return successMessage;
    }
};

export default Coffee;
