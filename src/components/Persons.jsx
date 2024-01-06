import React from "react";
import personService from "../services/persons";

const Persons = (props) => {
  const personsToShow = props.personsToShow;
  const setPersons = props.setPersons;

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(person.id).then(() => {
        console.log(`${person.name} is deleted`);
        setPersons(personsToShow.filter((p) => p.id !== person.id));
      });
    }
  };
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}{" "}
            <button
              onClick={() => {
                deletePerson(person);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
