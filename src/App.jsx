//@ts-check

import React, { useState } from "react";
import { SelectedRole } from "./components";
import CoffeeMachineState from "./components/CoffeeMachineState";

/**
 * Home page, let the user select a role (Customer or Owner)
 * @returns {React.JSX.Element}
 */
const App = () => {
  /**
   * The roles are available for the user to select
   * @typedef {("owner" | "customer")} User
   */

  /** @type {[User | null, React.Dispatch<React.SetStateAction<User | null>>]} */
  const [user, setUser] = useState(/** @type {User | null} */(null));

  /**
   * @type {Array.<User>}
   */
  const users = ["customer", "owner"];

  const selectedUserComponent = !user
    ? <p className="text-center">Select your role</p>
    : <SelectedRole user={user} />;

  return (
    <div className="p-4 flex flex-col gap-4 max-w-[55rem] m-auto">
      <h1 className="text-center text-2xl font-medium text-neutral-800">Coffee Machine Simulator</h1>
      <CoffeeMachineState />
      {selectedUserComponent}
      {!user ?
        <div className="flex items-center justify-evenly">
          {users.map(user => (
            <button key={user} onClick={() => setUser(user)} className="capitalize p-4 rounded border-2 min-w-28 font-medium text-neutral-800 border-slate-400" aria-label="Select your role">{user}</button>
          ))}
        </div>
        : <button className="self-start bg-neutral-800 text-white py-2 px-8 rounded font-medium" onClick={() => setUser(null)}>Back</button>
      }
    </div>
  )
}

export default App