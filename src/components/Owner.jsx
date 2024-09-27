//@ts-check

import React from "react";
import MakeRegularCoffeeForm from "./MakeRegularCoffeeForm";
import FillCoffeeMachine from "./FillCoffeeMachine";
import TakeMoney from "./TakeMoney";

/**
 * Owner actions component
 * @returns {React.JSX.Element}
 */
const Owner = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-8">
                <MakeRegularCoffeeForm />
                <FillCoffeeMachine />
            </div>
            <div>
                <TakeMoney />
            </div>
        </div>
    )
}

export default Owner