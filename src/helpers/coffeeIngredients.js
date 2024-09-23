//@ts-check

/**
 * @typedef {Object} CoffeeIngredient
 * @property {number} coffeeBeans The coffee beans in g
 * @property {number} water The water in ml
 * @property {number} milk The milk in ml
 * @property {number} price The cost
 */

/**
 * @typedef {Object} CoffeeTypes
 * @property {CoffeeIngredient} espresso
 * @property {CoffeeIngredient} latte
 * @property {CoffeeIngredient} cappuccino
 */

/** @type {CoffeeTypes} */
const coffeeIngredients = {
    espresso: {
        coffeeBeans: 16,
        milk: 0,
        water: 250,
        price: 4
    },
    latte: {
        coffeeBeans: 20,
        milk: 75,
        water: 350,
        price: 7
    },
    cappuccino: {
        coffeeBeans: 12,
        milk: 100,
        water: 200,
        price: 6
    }
};

export default coffeeIngredients;