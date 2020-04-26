import React from "react"
import { graphql } from "gatsby"
import {
  Grid,
  LogoAyG,
  NumeroResolucion,
  LogoSP,
  Day,
  Month,
  Year,
  Model,
  CarClass,
  Brand,
  Col4Right,
  Col6Right,
  Col10Right,
  Col2Left,
  Col3Left,
  Col6Left,
  Col8Left,
  Col12,
  Col2_6Mid,
  Names,
  Cedula,
  Licencia,
  Vigencia,
} from "../styles/DocumentStyles"

export const query = graphql`
  query GET_DATA {
    allFile {
      edges {
        node {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`

export default function Preview({ location, data }) {
  const { state = {} } = location
  const {
    driver,
    car,
    client,
    origin,
    destiny,
    startDate,
    finishDate,
    contractObjective,
  } = state

  return (
    <Grid>
      <Col6Left className="Header">Logo MT</Col6Left>
      <LogoAyG className="Header">Logo A&G</LogoAyG>
      <NumeroResolucion className="Header">
        Resolucion Min transporte
      </NumeroResolucion>
      <LogoSP className="Header">Logo Super trasnporte</LogoSP>
      <Col12 className="Text">FORMATO UNICO</Col12>
      <Col8Left className="Text">Razón social</Col8Left>
      <Col4Right className="Text">NIT</Col4Right>
      <Col8Left className="Text">SERVICIO ESPECIAL A&G TOURS S.A.S</Col8Left>
      <Col4Right className="Text">900.461.010 - 6</Col4Right>
      <Col2Left className="Text">CONTRATO Nº</Col2Left>
      <Col10Right className="Text">0019</Col10Right>
      <Col2Left className="Text">CONTRATANTE</Col2Left>
      <Col2_6Mid className="Text">CENTELSA S.A</Col2_6Mid>
      <Col4Right className="Text">890,300,413</Col4Right>
      <Col12 className="Text">OBJETO DEL CONTRATO:</Col12>
      <Col12 className="Text">Origen-Destinos</Col12>
      <Col12 className="Text">Origen-DestinosCiudades</Col12>
      <Col8Left className="Text">Tipo de contrato</Col8Left>
      <Col4Right className="Text">Con:</Col4Right>
      <Col12 className="Text">Vigencia del contrato</Col12>
      <Col6Left className="Text">Fecha de inicio</Col6Left>
      <Day className="Text">Dia</Day>
      <Month className="Text">Mes</Month>
      <Year className="Text">Año</Year>
      <Col6Left className="Text">Fecha de vencimiento</Col6Left>
      <Day className="Text">Dia</Day>
      <Month className="Text">Mes</Month>
      <Year className="Text">Año</Year>
      <Col12>Caracteristicas del vehiculo</Col12>
      <Col3Left>Placa</Col3Left>
      <Model>Modelo</Model>
      <Brand>Marca</Brand>
      <CarClass>Clase</CarClass>
      <Col3Left>Placa</Col3Left>
      <Model>Modelo</Model>
      <Brand>Marca</Brand>
      <CarClass>Clase</CarClass>
      <Col6Left>Numero interno</Col6Left>
      <Col6Right>Numero tarheta de operaciones</Col6Right>
      <Col6Left>Numero interno</Col6Left>
      <Col6Right>Numero tarheta de operaciones</Col6Right>
      <Col2Left>Conductores</Col2Left>
      <Names>Nombres y apellidos</Names>
      <Cedula>Nº Cedula</Cedula>
      <Licencia>Nº Licencia conduccion</Licencia>
      <Vigencia>Vigencia</Vigencia>
      <Col2Left>Conductor 1</Col2Left>
      <Names>Nombres y apellidos</Names>
      <Cedula>Nº Cedula</Cedula>
      <Licencia>Nº Licencia conduccion</Licencia>
      <Vigencia>Vigencia</Vigencia>
      <Col2Left>Conductor 2</Col2Left>
      <Names>Nombres y apellidos</Names>
      <Cedula>Nº Cedula</Cedula>
      <Licencia>Nº Licencia conduccion</Licencia>
      <Vigencia>Vigencia</Vigencia>
      <Col2Left>Conductor 3</Col2Left>
      <Names>Nombres y apellidos</Names>
      <Cedula>Nº Cedula</Cedula>
      <Licencia>Nº Licencia conduccion</Licencia>
      <Vigencia>Vigencia</Vigencia>
      <Col2Left>Responsable Contratante</Col2Left>
      <Names>Nombres y apellidos</Names>
      <Cedula>Nº Cedula</Cedula>
      <Licencia>Telefono</Licencia>
      <Vigencia>Dirección</Vigencia>
    </Grid>
  )
}
