//@ts-check

import React from 'react'
import Owner from './Owner';
import Customer from './Customer';

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
        customer: <Customer />,
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