import React, { useState, useEffect, useCallback } from "react";
import PersonList from "./PersonList/PersonList";
import TogglePerson from "./TogglePerson/TogglePerson";
const Persons = () => {
  const [state, setState] = useState({ persons: [] });

  const [showPerson, setShowPerson] = useState(false);

  useEffect(() => {
    setState({
      ...state,
      persons: [
        {
          id: "p1",
          name: "Prashant Parmar",
          age: 28,
        },
        {
          id: "p2",
          name: "Hni Parmar",
          age: 25,
        },
        {
          id: "p3",
          name: "Utsav Parmar",
          age: 21,
        },
      ],
    });
  }, []);

  const togglePersonHandler = useCallback(() => {
    setShowPerson(!showPerson);
  }, [showPerson]);

  const removePersonHamdler = (id) => {
    const copyPersons = [...state.persons];
    const findIndexOfPerson = copyPersons.findIndex((p) => p.id === id);
    if (findIndexOfPerson !== -1) {
      //Remove Person From copied array
      copyPersons.splice(findIndexOfPerson, 1);
      //SET NEW STATE
      setState((oldstate) => ({
        ...oldstate,
        persons: copyPersons,
      }));
    }
  };

  const changeNameHandler = (e, id) => {
    const copyPersons = [...state.persons];
    const findedPerson = copyPersons.findIndex((p) => p.id === id);
    const copyFindedPerson = { ...copyPersons[findedPerson] };
    copyFindedPerson.name = e.target.value;
    copyPersons[findedPerson] = copyFindedPerson;

    setState((oldstate) => ({
      ...oldstate,
      persons: copyPersons,
    }));
  };
  console.log("PERSONS");

  let toggleClass = "btn-warning";
  if (state.persons.length === 2) {
    toggleClass = "btn-info";
  }
  if (state.persons.length === 1) {
    toggleClass = "btn-danger";
  }
  return (
    <div className="container">
      <h1 className="main-heading">Persons</h1>
      <TogglePerson
        className={`btn ${toggleClass} toggle-btn mx-auto d-block mt-3`}
        clicked={togglePersonHandler}
      >
        Toggle Persons
      </TogglePerson>
      {showPerson && (
        <PersonList
          allPersons={state.persons}
          removePerson={removePersonHamdler}
          changeName={changeNameHandler}
        ></PersonList>
      )}
    </div>
  );
};
export default Persons;
