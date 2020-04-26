import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(24, 1fr);
  border: solid 1px black;
  height: min-content;
  .Header {
    height: 100px;
  }
  .Text {
    height: 30px;
  }
`
export const Col12 = styled.div`
  border-bottom: solid 1px black;
  grid-column: 1/13;
`
export const Col2_6Mid = styled.div`
  border-bottom: solid 1px black;
  border-right: solid 1px black;
  grid-column: 3/9;
`
export const Col2Left = styled.div`
  border-bottom: solid 1px black;
  grid-column: 1/3;
  border-right: solid 1px black;
`
export const Col3Left = styled.div`
  border-bottom: solid 1px black;
  grid-column: 1/4;
  border-right: solid 1px black;
`

export const Col6Left = styled.div`
  border-bottom: solid 1px black;
  border-right: solid 1px black;
  grid-column: 1/7;
`

export const Col8Left = styled.div`
  border-bottom: solid 1px black;
  border-right: solid 1px black;
  grid-column: 1/9;
`
export const Col4Right = styled.div`
  border-bottom: solid 1px black;
  grid-column: 9/13;
`
export const Col6Right = styled.div`
  border-bottom: solid 1px black;
  grid-column: 7/13;
`
export const Col10Right = styled.div`
  border-bottom: solid 1px black;
  grid-column: 3/13;
`
export const LogoAyG = styled.div`
  border-bottom: solid 1px black;
  grid-column: 7/9;
  border-right: solid 1px black;
`
export const NumeroResolucion = styled.div`
  border-bottom: solid 1px black;
  grid-column: 9/11;
  border-right: solid 1px black;
`
export const LogoSP = styled.div`
  border-bottom: solid 1px black;
  grid-column: 11/13;
`
export const Day = styled.div`
  border-bottom: solid 1px black;
  border-right: solid 1px black;
  grid-column: 7/9;
`
export const Month = styled.div`
  border-right: solid 1px black;
  border-bottom: solid 1px black;
  grid-column: 9/11;
`
export const Year = styled.div`
  border-bottom: solid 1px black;
  grid-column: 11/13;
`
export const Model = styled.div`
  border-right: solid 1px black;
  border-bottom: solid 1px black;
  grid-column: 4/7;
`
export const Brand = styled.div`
  border-right: solid 1px black;
  border-bottom: solid 1px black;
  grid-column: 7/10;
`
export const CarClass = styled.div`
  border-bottom: solid 1px black;
  grid-column: 10/13;
`
export const Names = styled.div`
  border-right: solid 1px black;
  border-bottom: solid 1px black;
  grid-column: 3/7;
`
export const Cedula = styled.div`
  border-right: solid 1px black;
  border-bottom: solid 1px black;
  grid-column: 7/9;
`
export const Licencia = styled.div`
  border-right: solid 1px black;
  border-bottom: solid 1px black;
  grid-column: 9/11;
`
export const Vigencia = styled.div`
  border-bottom: solid 1px black;
  grid-column: 11/13;
`
