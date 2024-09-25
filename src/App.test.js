import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const renderComponent = () => {
    render(<App />);

    const roleButtons = screen.getAllByRole("button", {
        name: /role/i
    });

    return {
        roleButtons
    }
}

it('should render two button roles (owner and customer) to be selected from the user', () => {
    const { roleButtons } = renderComponent();

    expect(roleButtons).toHaveLength(2);

    const roles = ["owner", "customer"];
    for (const roleButton of roleButtons) {
        const isValidRole = roles.some(role => {
            const regex = new RegExp(role, "i");
            return regex.test(roleButton.textContent);
        });
        expect(isValidRole).toBe(true);
    };
});

it('should hide the initial message when selecting a role', async () => {
    const { roleButtons } = renderComponent();

    const intitalText = screen.getByText("Select your role");

    for (const roleButton of roleButtons) {
        await userEvent.click(roleButton);

        const backButton = screen.getByRole("button", {
            name: /back/i
        });

        expect(backButton).toBeInTheDocument();
        expect(intitalText).not.toBeInTheDocument();
    }

    expect(intitalText).not.toBeInTheDocument();
});

it('should display the selected role component with a back button and hide the role buttons', async () => {
    const { roleButtons } = renderComponent();

    for (const roleButton of roleButtons) {
        await userEvent.click(roleButton);

        const roleSection = screen.getByRole("region", {
            name: /selected role/i
        });

        const backButton = screen.getByRole("button", {
            name: /back/i
        });

        const roleButtons = screen.queryAllByRole("button", {
            name: /role/i
        });

        expect(roleSection).toBeInTheDocument();
        expect(backButton).toBeInTheDocument();
        expect(roleButtons).toHaveLength(0);
    }
});