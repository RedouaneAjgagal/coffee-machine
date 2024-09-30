//@ts-check

import React, { useState } from "react";

/**
 * @typedef {Object} Props
 * @property {React.ReactNode} [children]
 */

/**
 * @typedef {Object} CoffeeMachineStateType
 * @property {Function} onChange
 * @property {boolean} hasCoffeeStateChange
 */


/**
 * @type {React.Context<CoffeeMachineStateType>}
 */
const CoffeeMachineContext = React.createContext(/** @type {CoffeeMachineStateType} */({
    onChange: () => { },
    hasCoffeeStateChange: false
}));

/**
 * 
 * @param {Props} props 
 * @returns {React.JSX.Element}
 */
const CoffeeMachineState = (props) => {
    const [hasCoffeeStateChange, setHasCoffeeStateChange] = useState(false);

    const coffeeStateChangedHandler = () => {
        setHasCoffeeStateChange(prev => !prev);
    }

    /**
     * @type {React.ProviderProps<CoffeeMachineStateType>["value"]}
     */
    const data = {
        onChange: coffeeStateChangedHandler,
        hasCoffeeStateChange
    }

    return (
        <CoffeeMachineContext.Provider value={data} >
            {props.children}
        </CoffeeMachineContext.Provider>
    )
}

export {
    CoffeeMachineContext
}


export default CoffeeMachineState