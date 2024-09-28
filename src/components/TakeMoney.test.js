import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TakeMoney from "./TakeMoney";
import CoffeeMachine from "../classes/coffeeMachine";

const renderComponent = () => {
    render(<TakeMoney />);
}

it("should take money from the coffee machine if available", async () => {
    CoffeeMachine.totalMoney = 13;
    renderComponent();

    const takeMoneyButton = screen.getByRole("button", {
        name: /take/i
    });

    await userEvent.click(takeMoneyButton);

    expect(CoffeeMachine.totalMoney).toBe(0);
});

it("should have a disabled take money button when the machine money is 0", () => {
    CoffeeMachine.totalMoney = 0;
    renderComponent();

    const takeMoneyButton = screen.getByRole("button", {
        name: /take/i
    });

    expect(takeMoneyButton).toHaveAttribute("disabled");
});