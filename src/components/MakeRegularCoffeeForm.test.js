import { screen, render, queryByRole } from "@testing-library/react";
import MakeRegularCoffeeForm from "./MakeRegularCoffeeForm";
import userEvent from "@testing-library/user-event";
import CoffeeMachine from "../classes/coffeeMachine";
import { coffeeIngredients } from "../helpers";

const renderComponent = () => {
    render(<MakeRegularCoffeeForm />);
}

const fillTheForm = async (amountOfCups) => {
    const amountOfCupsInput = screen.getByRole("spinbutton", {
        name: /amount of cups/i
    });

    await userEvent.click(amountOfCupsInput);
    await userEvent.keyboard(amountOfCups);
}


afterEach(() => {
    CoffeeMachine.totalCoffeeBeans = 650;
    CoffeeMachine.totalMilk = 2700;
    CoffeeMachine.totalWater = 11500;
});


const submitTheCheckForm = async () => {
    const checkIfAvailableButton = screen.getByRole("button", {
        name: /check if available/i
    });

    await userEvent.click(checkIfAvailableButton);
}

it("should display the stutus when checking if the provided cups available", async () => {
    renderComponent();

    const statusComponent = screen.queryByRole("article");
    expect(statusComponent).not.toBeInTheDocument();

    await fillTheForm("12");

    await submitTheCheckForm();

    const statusComponentAfterChecking = screen.queryByRole("article");
    expect(statusComponentAfterChecking).toBeInTheDocument();
});

it("should make cups of regular coffee", async () => {
    renderComponent();

    const amountOfCups = 2;

    await fillTheForm(amountOfCups.toString());

    await submitTheCheckForm();

    const makeCoffeeCupsButton = screen.getByRole("button", {
        name: /cups of coffee/i
    });

    const expectedCoffeeBeans = CoffeeMachine.totalCoffeeBeans - (coffeeIngredients.regularCoffee.coffeeBeans * amountOfCups);
    const expectedMilk = CoffeeMachine.totalMilk - (coffeeIngredients.regularCoffee.milk * amountOfCups);
    const expectedWater = CoffeeMachine.totalWater - (coffeeIngredients.regularCoffee.water * amountOfCups);

    await userEvent.click(makeCoffeeCupsButton);

    expect(CoffeeMachine.totalCoffeeBeans).toBe(expectedCoffeeBeans);
    expect(CoffeeMachine.totalMilk).toBe(expectedMilk);
    expect(CoffeeMachine.totalWater).toBe(expectedWater);
});

it("should not display the make cups of coffee button when it the ingredients is not enough", async () => {
    renderComponent();

    await fillTheForm("500");

    await submitTheCheckForm();

    const makeCoffeeCupsButton = screen.queryByRole("button", {
        name: /cups of coffee/i
    });

    expect(makeCoffeeCupsButton).toBe(null);
});