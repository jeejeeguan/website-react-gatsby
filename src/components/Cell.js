import React from "react";
import styled from "styled-components";

const CellGroup = styled.div``;
const CellImage = styled.div`
  width: 60px;
  heigth: 60px;
  background: black;
  border-radius: 12px;
  background-image: url(${(props) => props.image});
  background-size: 60px;
`;
const CellTitle = styled.div``;

const Cell = (props) => (
  <CellGroup>
    <CellImage image={props.image}></CellImage>
    <CellTitle> {props.title} </CellTitle>
  </CellGroup>
);

export default Cell;
