

import React, { useId } from 'react';

function Userid() {

    const id=useId()

    const last=useId()

    console.log(id , last)
    const passwordHintId = useId();

    console.log(passwordHintId)

  return (
    <div>

        <form >

        <label htmlFor={`${id}-firstname`}>First Name</label>
        <input type="text" id={`${id}-firstname`} name="name" />

        <label htmlFor={`${last}-firstname`}>last Name</label>
        <input type="text" id={`${last} -firstname`} name="name" />

        <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
        </form>
    </div>
  )
}

export default Userid