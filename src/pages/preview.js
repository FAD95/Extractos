import React from "react"
import { graphql } from "gatsby"
import {
<<<<<<< HEAD
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

=======
  DocumentMain,
  DocumentSection,
  DocumentMainDiv,
  DocumentFooter,
  DocumentArticle,
  DocumentSubTitle,
  DocumentSubTitleH3,
  DocumentInfo,
  Table,
  Tr,
  Th,
  Td,
  TDate,
  FooterImg,
  EndFooter,
  SignatureContainer,
  TableTitle,
  TDateContainer,
  Signature,
  ContactInfo,
} from "../styles/components"
import DocumentHeaderComponent from "../components/DocumentHeader"
>>>>>>> Documento
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
<<<<<<< HEAD
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
=======
    <DocumentArticle>
      <DocumentHeaderComponent data={data} />
      <DocumentMain>
        <DocumentSection className="Border-bottom">
          <DocumentMainDiv className="Border-right">
            <DocumentSubTitle>Razón social:</DocumentSubTitle>
            <DocumentInfo>Servicio especial A&G TOURS S.A.S</DocumentInfo>
          </DocumentMainDiv>
          <DocumentMainDiv>
            <DocumentSubTitle>NIT:</DocumentSubTitle>
            <DocumentInfo>900.461.010-6</DocumentInfo>
          </DocumentMainDiv>
        </DocumentSection>
        <DocumentSection className="Border-bottom">
          <DocumentSubTitle>Contrato Nº: </DocumentSubTitle>
          <DocumentInfo>...</DocumentInfo>
        </DocumentSection>
        <DocumentSection className="Border-bottom">
          <DocumentMainDiv className="Border-right">
            <DocumentSubTitle>Contratante: </DocumentSubTitle>
            <DocumentInfo>{client}</DocumentInfo>
          </DocumentMainDiv>
          <DocumentMainDiv>
            <DocumentSubTitle>C.C: </DocumentSubTitle>
            <DocumentInfo>123</DocumentInfo>
          </DocumentMainDiv>
        </DocumentSection>
        <DocumentSection className="Border-bottom">
          <DocumentSubTitle>Objeto del contrato: </DocumentSubTitle>
          <DocumentInfo>{contractObjective}</DocumentInfo>
        </DocumentSection>
        <DocumentSection className="Border-bottom">
          <DocumentMainDiv>
            <DocumentSubTitle>Origen: </DocumentSubTitle>
            <DocumentInfo>{origin}</DocumentInfo>
          </DocumentMainDiv>
          <DocumentMainDiv>
            <DocumentSubTitle>Destino: </DocumentSubTitle>
            <DocumentInfo>{destiny}</DocumentInfo>
          </DocumentMainDiv>
        </DocumentSection>
        <section className="Border-bottom">
          <TableTitle className="Border-bottom">
            VIGENCIA DEL CONTRATO
          </TableTitle>
          <DocumentSection>
            <TDateContainer className="Border-right">
              <DocumentSubTitleH3 className="Border-bottom">
                Fecha inicial
              </DocumentSubTitleH3>
              <TDate>
                <Tr>
                  <Th className="Border-right">Día</Th>
                  <Th className="Border-right">Mes</Th>
                  <Th>Año</Th>
                </Tr>
                <Tr>
                  <Td className="Border-right">{startDate.slice(8, 10)}</Td>
                  <Td className="Border-right">{startDate.slice(5, 7)}</Td>
                  <Td>{startDate.slice(0, 4)}</Td>
                </Tr>
              </TDate>
            </TDateContainer>
            <TDateContainer>
              <DocumentSubTitleH3 className="Border-bottom">
                Fecha de vencimiento
              </DocumentSubTitleH3>
              <TDate>
                <Tr>
                  <Th className="Border-right">Día</Th>
                  <Th className="Border-right">Mes</Th>
                  <Th>Año</Th>
                </Tr>
                <Tr>
                  <Td className="Border-right">{finishDate.slice(8, 10)}</Td>
                  <Td className="Border-right">{finishDate.slice(5, 7)}</Td>
                  <Td>{finishDate.slice(0, 4)}</Td>
                </Tr>
              </TDate>
            </TDateContainer>
          </DocumentSection>
        </section>
        <section className="Border-bottom">
          <TableTitle className="Border-bottom">
            CARACTERÍSTICAS DEL VEHICULO
          </TableTitle>
          <Table>
            <Tr>
              <Th className="Border-right">Placa</Th>
              <Th className="Border-right">Marca</Th>
              <Th className="Border-right">Modelo</Th>
              <Th className="Border-right">Clase</Th>
              <Th className="Border-right">Capacidad</Th>
              <Th className="Border-right">Nº interno</Th>
              <Th>Nº tarjeta operación</Th>
            </Tr>
            {car.map((value, index) => {
              return (
                <Tr key={index}>
                  {/* Placa */}
                  <Td className="Border-right">{value.value}</Td>

                  {/* Marca */}
                  <Td className="Border-right">{value.value}</Td>

                  {/* Modelo */}
                  <Td className="Border-right">{value.value}</Td>

                  {/* Clase */}
                  <Td className="Border-right">{value.value}</Td>

                  {/* Capacidad */}
                  <Td className="Border-right">{value.value}</Td>

                  {/* Número interno */}
                  <Td className="Border-right">...</Td>

                  {/* Número de tarjeta de operación */}
                  <Td>...</Td>
                </Tr>
              )
            })}
          </Table>
        </section>
        <section className="Border-bottom">
          <TableTitle className="Border-bottom">CONDUCTOR</TableTitle>
          <Table>
            <thead>
              <Tr>
                <Th className="Border-right">Conductores</Th>
                <Th className="Border-right">Nombres y apellidos</Th>
                <Th className="Border-right">Nº Cédula</Th>
                <Th className="Border-right">Nº Licencia</Th>
                <Th>Vigencia</Th>
              </Tr>
            </thead>
            <tbody>
              <Tr>
                <Th className="Border-right">Conductor 1</Th>
                <Td className="Border-right">{driver[0].value}</Td>
                <Td className="Border-right">{driver[0].value}</Td>
                <Td className="Border-right">{driver[0].value}</Td>
                <Td>{driver[0].value}</Td>
              </Tr>
              <Tr>
                <Th className="Border-right">Conductor 2</Th>
                <Td className="Border-right">{driver[0].value}</Td>
                <Td className="Border-right">{driver[0].value}</Td>
                <Td className="Border-right">{driver[0].value}</Td>
                <Td>{driver[0].value}</Td>
              </Tr>
              <Tr>
                <Th className="Border-right">Conductor 3</Th>
                <Td className="Border-right">{driver[0].value}</Td>
                <Td className="Border-right">{driver[0].value}</Td>
                <Td className="Border-right">{driver[0].value}</Td>
                <Td>{driver[0].value}</Td>
              </Tr>
            </tbody>
          </Table>
        </section>
        <section className="Border-bottom">
          <TableTitle className="Border-bottom">
            RESPONSABLE CONTRATANTE
          </TableTitle>
          <Table>
            <Tr>
              <Th className="Border-right">Nombres y apellidos</Th>
              <Th className="Border-right">Nº Cédula</Th>
              <Th className="Border-right">Telefono</Th>
              <Th>Dirección</Th>
            </Tr>
            <Tr>
              <Td className="Border-right">El contratante</Td>
              <Td className="Border-right">El contratante</Td>
              <Td className="Border-right">El contratante</Td>
              <Td>El contratante</Td>
            </Tr>
          </Table>
        </section>
      </DocumentMain>
      <DocumentFooter>
        <DocumentSection className="Border-bottom">
          <ContactInfo>
            <DocumentSubTitle>DATOS DE CONTACTO DE LA EMPRESA</DocumentSubTitle>
            <DocumentInfo>
              Servicio especial A&G TOURS S.A.S <br />
              Bogotá PBX (57-1) 3112233 <br />
              Cel. 310 284 6000 <br />
              Email: agtours.sas@gmail.com www.aygtours.com
            </DocumentInfo>
          </ContactInfo>
          <SignatureContainer className="Border-left">
            <DocumentSubTitle>FIRMA DEL REPRESENTANTE LEGAL</DocumentSubTitle>
            <div>
              <Signature
                src={data.allFile.edges[6].node.childImageSharp.original.src}
                alt="La firma"
              />
            </div>
            <small>Firma Digital Ley 527 del 199, decreto 2364 de 2012</small>
          </SignatureContainer>
        </DocumentSection>

        <EndFooter>
          <div>
            <DocumentInfo>Verificación virtual?</DocumentInfo>
          </div>
          <div>
            <FooterImg
              src={data.allFile.edges[5].node.childImageSharp.original.src}
              alt="SUPERTRANSPORTE"
            />
          </div>
        </EndFooter>
      </DocumentFooter>
      {/* <button onClick={handleClose}>Cerrar</button> */}
    </DocumentArticle>
>>>>>>> Documento
  )
}
