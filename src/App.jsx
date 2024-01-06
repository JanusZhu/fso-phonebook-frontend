import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");
  const genNewId = () => {
    return Math.floor(Math.random() * 1000);
  };
  useEffect(() => {
    personService.getAll().then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  const addPerson = (e) => {
    e.preventDefault();
    const duplicatePerson = persons.find((person) => person.name === newName);
    if (duplicatePerson) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...duplicatePerson, number: newNumber };
        personService
          .update(updatedPerson.id, updatedPerson)
          .then((response) => {
            setPersons(
              persons.map((p) =>
                p.id !== updatedPerson.id ? p : response.data
              )
            );
          });
      }
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: genNewId(),
    };
    personService.create(newPerson).then((response) => {
      setPersons(persons.concat(newPerson));
      console.log(response);
    });
  };
  const changeNewName = (e) => {
    setNewName(e.target.value);
  };
  const changeNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const personsToShow = filterString
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filterString.toLowerCase())
      )
    : persons;
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterString={filterString} setFilterString={setFilterString} />
      <PersonForm
        addPerson={addPerson}
        changeNewName={changeNewName}
        changeNewNumber={changeNewNumber}
      />
      <Persons personsToShow={personsToShow} setPersons={setPersons} />
    </div>
  );
};

export default App;
