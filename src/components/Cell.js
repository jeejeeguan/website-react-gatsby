import React from "react";
import styled from "styled-components";

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`;
const CellImage = styled.div`
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CellTitle = styled.div``;

const Cell = (props) => (
  <CellGroup>
    <CellImage>
      <img src={props.image} style={{ width: 40, height: 40 }} alt="" />
    </CellImage>
    <CellTitle> {props.title} </CellTitle>
  </CellGroup>
);

export default Cell;
