import React from "react";

const PersonForm = (props) => {
  const { addPerson, changeNewName, changeNewNumber } = props;
  return (
    <div>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={changeNewName} />
        </div>
        <div>
          number: <input onChange={changeNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
