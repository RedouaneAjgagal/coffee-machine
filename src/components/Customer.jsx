//@ts-check

import React from "react"
import BuyCoffee from "./BuyCoffee"

/**
 * Customer actions component
 * @returns {React.JSX.Element}
 */
const Customer = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 text-center justify-center">
                <BuyCoffee />
            </div>
        </div>
    )
}

export default Customer