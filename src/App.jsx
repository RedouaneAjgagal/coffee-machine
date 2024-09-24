//@ts-check

import React, { useState } from "react";

const App = () => {
  /**
   * @typedef {("owner" | "customer")} User
   */

  /** @type {[User | null, React.Dispatch<React.SetStateAction<User | null>>]} */
  const [user, setUser] = useState(/** @type {User | null} */(null));

  /**
   * @type {Array.<User>}
   */
  const users = ["customer", "owner"];

  const selectedUserComponents = {
    customer: <div>Customer</div>,
    owner: <div>Owner</div>
  };

  const selectedUser = !user
    ? <p className="text-center">Select your role</p>
    : selectedUserComponents[user];

  return (
    <div className="p-4 flex flex-col gap-4 max-w-[35rem] m-auto">
      <h1 className="text-center text-2xl font-medium text-neutral-800">Coffee Machine Simulator</h1>
      {selectedUser}
      {!user ?
        <div className="flex items-center justify-evenly">
          {users.map(user => (
            <button key={user} onClick={() => setUser(user)} className="p-4 rounded border-2 min-w-28 font-medium text-neutral-800 border-slate-400">{user}</button>
          ))}
        </div>
        : <button onClick={() => setUser(null)}>Back</button>
      }
    </div>
  )
}

export default App