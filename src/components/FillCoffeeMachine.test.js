import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FillCoffeeMachine from "./FillCoffeeMachine";
import CoffeeMachine from "../classes/coffeeMachine";

const renderComponent = () => {
    render(<FillCoffeeMachine />);
}

const fillTheForm = async (coffeeBeans, milk, water) => {
    const coffeeBeansInput = screen.getByRole("spinbutton", {
        name: /coffee beans/i
    });

    const milkInput = screen.getByRole("spinbutton", {
        name: /milk/i
    });

    const waterInput = screen.getByRole("spinbutton", {
        name: /water/i
    });


    await userEvent.click(coffeeBeansInput);
    await userEvent.keyboard(coffeeBeans);

    await userEvent.click(milkInput);
    await userEvent.keyboard(milk);

    await userEvent.click(waterInput);
    await userEvent.keyboard(water);

    return {
        coffeeBeansInput,
        milkInput,
        waterInput
    }
};

const submitTheForm = async () => {
    const fillButton = screen.getByRole("button", {
        name: /fill/i
    });

    await userEvent.click(fillButton);
}


afterEach(() => {
    CoffeeMachine.totalCoffeeBeans = 650;
    CoffeeMachine.totalMilk = 2700;
    CoffeeMachine.totalWater = 11500;
});


it('should empty the values when submitting', async () => {
    renderComponent();

    const { coffeeBeansInput, milkInput, waterInput } = await fillTheForm("90", "300", "1200");

    await submitTheForm();

    expect(coffeeBeansInput).toHaveValue(null);
    expect(milkInput).toHaveValue(null);
    expect(waterInput).toHaveValue(null);
});

it("should increase the coffee machine ingredients when submitting the form", async () => {
    renderComponent();

    const providedIngredients = {
        coffeeBeans: 90,
        milk: 300,
        water: 1200
    }

    const expectedCoffeeBeans = CoffeeMachine.totalCoffeeBeans + providedIngredients.coffeeBeans;
    const expectedMilk = CoffeeMachine.totalMilk + providedIngredients.milk;
    const expectedWater = CoffeeMachine.totalWater + providedIngredients.water;

    await fillTheForm(
        providedIngredients.coffeeBeans.toString(),
        providedIngredients.milk.toString(),
        providedIngredients.water.toString()
    );
    await submitTheForm();

    expect(CoffeeMachine.totalCoffeeBeans).toBe(expectedCoffeeBeans);
    expect(CoffeeMachine.totalMilk).toBe(expectedMilk);
    expect(CoffeeMachine.totalWater).toBe(expectedWater);
});