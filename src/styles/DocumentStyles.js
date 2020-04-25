import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(24, 1fr);
  border: solid 1px black;
`

export const GridElement = styled.div`
  border-bottom: solid 1px black;
  grid-column: 1/7;
`
