import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoffeeMachine from "../classes/coffeeMachine";
import { coffeeIngredients } from "../helpers";
import BuyCoffee from "./BuyCoffee";

const renderComponent = () => {
    render(<BuyCoffee />);
}

it("should select a coffee type on click", async () => {
    renderComponent();

    // Check based on the input
    const radioInputs = screen.getAllByRole("radio");
    for (const radioInput of radioInputs) {
        await userEvent.click(radioInput);

        expect(radioInput).toBeChecked();
    }

    // Check based on the label
    const coffeeTypes = ["espresso", "latte", "cappuccino"];
    for (const coffeeType of coffeeTypes) {
        const regex = new RegExp(coffeeType, "i");

        const label = screen.getByText(regex, {
            selector: "label"
        });

        await userEvent.click(label);

        expect(label).toHaveAttribute("aria-selected", "true");
    }
});

it("shoul not display a status message until the user click on the buy button", async () => {
    renderComponent();

    // Before clicking on the buy button
    const statusMessageBeforeClicking = screen.queryByRole("article", {
        name: /status message/i
    });
    expect(statusMessageBeforeClicking).not.toBeInTheDocument();


    const buyButton = screen.getByRole("button", {
        name: /buy/i
    });
    await userEvent.click(buyButton);


    // After clicking on the buy button
    const statusMessageAfterClicking = screen.queryByRole("article", {
        name: /status message/i
    });
    expect(statusMessageAfterClicking).toBeInTheDocument();
});

it("should decrease coffee machine ingredient when the user buy coffee and increase the money", async () => {
    renderComponent();

    const buyButton = screen.getByRole("button", {
        name: /buy/i
    });

    const coffeeTypes = ["espresso", "latte", "cappuccino"];
    for (const coffeeType of coffeeTypes) {

        // select a coffee type
        const regex = new RegExp(coffeeType, "i");
        const label = screen.getByText(regex, {
            selector: "label"
        });
        await userEvent.click(label);

        // the expected states
        const expectedTotalCoffeeBeans = CoffeeMachine.totalCoffeeBeans - coffeeIngredients[coffeeType].coffeeBeans;
        const expectedTotalMilk = CoffeeMachine.totalMilk - coffeeIngredients[coffeeType].milk;
        const expectedTotalWater = CoffeeMachine.totalWater - coffeeIngredients[coffeeType].water;
        const expectedTotalMoney = CoffeeMachine.totalMoney + coffeeIngredients[coffeeType].price;

        // buy the selected coffee
        await userEvent.click(buyButton);

        expect(CoffeeMachine.totalCoffeeBeans).toBe(expectedTotalCoffeeBeans);
        expect(CoffeeMachine.totalMilk).toBe(expectedTotalMilk);
        expect(CoffeeMachine.totalWater).toBe(expectedTotalWater);
        expect(CoffeeMachine.totalMoney).toBe(expectedTotalMoney);
    }
});