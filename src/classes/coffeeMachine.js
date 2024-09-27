//@ts-check

/**
 * A class of the coffee machine that has all the coffee ingredients
 * @class
 */
class CoffeeMachine {
    static totalCoffeeBeans = 650;
    static totalWater = 11500;
    static totalMilk = 2700;
    static totalMoney = 13;
    
    /**
     * Consume the ingredients from the coffee machine to make coffee
     * @param {number} coffeeBeans The amount of coffee beans in g
     * @param {number} water The amount of water in ml
     * @param {number} milk The amount of water in ml
     * @param {number} money The coffee cost
     * @returns {void}
     */
    static consumeRessources(coffeeBeans, water, milk, money) {
        this.totalCoffeeBeans -= coffeeBeans;
        this.totalWater -= water;
        this.totalMilk -= milk;
        this.totalMoney += money;
    };

    /**
     * Check how many available cups available based on the provided ingredients
     * @param {number} coffeeBeans The amount of coffee beans in g
     * @param {number} water The amount of water in ml
     * @param {number} milk The amount of water in ml
     * @returns {number} The amount of cups available based on the provided ingredients
     */
    static availableCups(coffeeBeans, water, milk) {
        const amountOfBeans = Math.floor(this.totalCoffeeBeans / coffeeBeans);
        const amountOfWater = Math.floor(this.totalWater / water);
        const amountOfMilk = Math.floor(this.totalMilk / milk);

        const availableCups = Math.min(amountOfBeans, amountOfWater, amountOfMilk);
        return availableCups;
    };

    /**
     * Fill the coffee machine with ingredients
     * @param {number} coffeeBeans The amount of coffee beans in g
     * @param {number} milk The amount of water in ml
     * @param {number} water The amount of water in ml
     * @returns {void}
     */
    static fill(coffeeBeans, milk, water) {
        this.totalCoffeeBeans += coffeeBeans;
        this.totalMilk += milk;
        this.totalWater += water;
    }
};

export default CoffeeMachine;