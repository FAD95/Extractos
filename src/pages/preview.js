import React from "react"
import { graphql } from "gatsby"
import {
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
  )
}
