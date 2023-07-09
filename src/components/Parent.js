import React, { useState } from "react";
import DisplayData from "./Display";
import Form from "./Form";


function ParentComponent() {
    const [firstName, setFirstName] = useState("Will");
    const [lastName, setLastName] = useState("Chang");
  
    function handleFirstNameChange(event) {
      setFirstName(event.target.value);
    }
  
    function handleLastNameChange(event) {
      setLastName(event.target.value);
    }

    return (
        <div>
        <Form
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
        />
        <DisplayData />
        </div>
    )
}

export default ParentComponent;