import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Child from "./Child";
import styled from "styled-components";

const BigC = styled.div`
  display: flex;
  flex-direction: wrap;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [person, setPerson] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log("data im getting from api", response.data.results);
        setPerson(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <BigC>
        {person.map((item, index) => {
          return (
            <Child
              name={item.name}
              hair_color={item.hair_color}
              eye_color={item.eye_color}
              gender={item.gender}
              height={item.height}
            />
          );
        })}
      </BigC>
    </div>
  );
};

export default App;
