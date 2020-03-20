import React from "react";
import "./App.css";
import styled from "styled-components";

const BigC = styled.div`
  display: flex;
  flex-direction: wrap;
`;

const Container = styled.div`
  margin: 10 auto;
  height: 300px;
  border: 5px solid white;
  width 40%;
`;

const Child = person => {
  return (
    <Container>
      <h1>Name: {person.name}</h1>
      <h3>Hair Color: {person.hair_color}</h3>
      <h3>Eye Color: {person.eye_color}</h3>
      <h3>Gender: {person.gender}</h3>
      <h3>Height: {person.height} cm</h3>
    </Container>
  );
};

export default Child;
