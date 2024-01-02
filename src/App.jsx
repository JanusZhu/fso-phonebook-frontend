import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");
  const genNewId = () => {
    return Math.floor(Math.random() * 1000);
  };
  const addPerson = (e) => {
    e.preventDefault();
    const duplicatePerson = persons.find((person) => person.name === newName);
    if (duplicatePerson) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: genNewId(),
    };
    setPersons(persons.concat(newPerson));
  };
  const changeNewName = (e) => {
    setNewName(e.target.value);
  };
  const changeNewNumber = (e) => {
    setNewNumber(e.target.value);
  };
  const changeFilterString = (e) => {
    setFilterString(e.target.value);
  };
  const personsToShow = filterString
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filterString.toLowerCase())
      )
    : persons;
  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Filter</h2>
      <div>
        filter shown with: <input onChange={changeFilterString} />
      </div>
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
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
