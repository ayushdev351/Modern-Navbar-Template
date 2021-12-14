import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Button() {
  return (
    <>
      <sButton>Sign Up</sButton>
    </>
  );
}

export default Button;

const sButton = styled.div`
  color: black;
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  width: 40%;
  :hover {
    cursor: pointer;
    color: grey;
  }
`;
