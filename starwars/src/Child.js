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
  border-radius:20px;
  width 40%;
`;

const Perm = styled.h1`
  font-family: "Permanent Marker", cursive;
  text-decoration: underline;
`;

const Super = styled.h3`
  font-family: "Supermercado One", cursive;
  color: white;
`;

const Child = person => {
  return (
    <Container>
      <Perm>{person.name}</Perm>
      <Super>Hair Color: {person.hair_color}</Super>
      <Super>Eye Color: {person.eye_color}</Super>
      <Super>Gender: {person.gender}</Super>
      <Super>Height: {person.height} cm </Super>
    </Container>
  );
};

export default Child;
