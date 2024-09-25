//@ts-check

import React from 'react'
import Owner from './Owner';

/**
 * @typedef {Object} UserType
 * @property {("customer" | "owner")} user
 */

/**
 * 
 * @param {UserType} props
 * @returns {React.JSX.Element}
 */
const SelectedRole = (props) => {

    const selectedUserComponents = {
        customer: <div>Customer</div>,
        owner: <Owner />
    };

    const selectedUserComponent = selectedUserComponents[props.user];

    return (
        <section aria-label="selected role information">
            {selectedUserComponent}
        </section>
    )
}

export default SelectedRole