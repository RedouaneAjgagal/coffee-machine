import App from "../App";
import { screen, render } from "@testing-library/react";

it("should display coffee machine information", () => {
    render(<App />);

    const section = screen.getByRole("region", {
        name: /coffee machine/i
    });

    const coffeeBeans = screen.getByRole('status', {
        name: /coffee beans/i
    });
    const milk = screen.getByRole('status', {
        name: /milk/i
    });
    const water = screen.getByRole('status', {
        name: /water/i
    });
    const money = screen.getByRole('status', {
        name: /money/i
    });

    expect(section).toBeInTheDocument();
    expect(coffeeBeans).toBeInTheDocument();
    expect(milk).toBeInTheDocument();
    expect(water).toBeInTheDocument();
    expect(money).toBeInTheDocument();
});