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
        <DocumentSection>
          <DocumentMainDiv>
            <DocumentSubTitle>Razón social:</DocumentSubTitle>
            <DocumentInfo>Servicio especial A&G TOURS S.A.S</DocumentInfo>
          </DocumentMainDiv>
          <DocumentMainDiv>
            <DocumentSubTitle>NIT:</DocumentSubTitle>
            <DocumentInfo>900.461.010-6</DocumentInfo>
          </DocumentMainDiv>
        </DocumentSection>
        <DocumentSection>
          <DocumentSubTitle>Contrato Nº: </DocumentSubTitle>
          <DocumentInfo>...</DocumentInfo>
        </DocumentSection>
        <DocumentSection>
          <DocumentMainDiv>
            <DocumentSubTitle>Contratante: </DocumentSubTitle>
            <DocumentInfo>{client}</DocumentInfo>
          </DocumentMainDiv>
          <DocumentMainDiv>
            <DocumentSubTitle>C.C: </DocumentSubTitle>
            <DocumentInfo>123</DocumentInfo>
          </DocumentMainDiv>
        </DocumentSection>
        <DocumentSection>
          <DocumentSubTitle>Objeto del contrato: </DocumentSubTitle>
          <DocumentInfo>{contractObjective}</DocumentInfo>
        </DocumentSection>
        <DocumentSection>
          <DocumentMainDiv>
            <DocumentSubTitle>Origen: </DocumentSubTitle>
            <DocumentInfo>{origin}</DocumentInfo>
          </DocumentMainDiv>
          <DocumentMainDiv>
            <DocumentSubTitle>Destino: </DocumentSubTitle>
            <DocumentInfo>{destiny}</DocumentInfo>
          </DocumentMainDiv>
        </DocumentSection>
        <section>
          <TableTitle>VIGENCIA DEL CONTRATO</TableTitle>
          <DocumentSection>
            <TDateContainer>
              <DocumentSubTitleH3>Fecha inicial</DocumentSubTitleH3>
              <TDate>
                <Tr>
                  <Th>Día</Th>
                  <Th>Mes</Th>
                  <Th>Año</Th>
                </Tr>
                <Tr>
                  <Td>{startDate.slice(8, 10)}</Td>
                  <Td>{startDate.slice(5, 7)}</Td>
                  <Td>{startDate.slice(0, 4)}</Td>
                </Tr>
              </TDate>
            </TDateContainer>
            <TDateContainer>
              <DocumentSubTitleH3>Fecha de vencimiento</DocumentSubTitleH3>
              <TDate>
                <Tr>
                  <Th>Día</Th>
                  <Th>Mes</Th>
                  <Th>Año</Th>
                </Tr>
                <Tr>
                  <Td>{finishDate.slice(8, 10)}</Td>
                  <Td>{finishDate.slice(5, 7)}</Td>
                  <Td>{finishDate.slice(0, 4)}</Td>
                </Tr>
              </TDate>
            </TDateContainer>
          </DocumentSection>
        </section>
        <section>
          <TableTitle>CARACTERÍSTICAS DEL VEHICULO</TableTitle>
          <Table>
            <Tr>
              <Th>Placa</Th>
              <Th>Marca</Th>
              <Th>Modelo</Th>
              <Th>Clase</Th>
              <Th>Capacidad</Th>
              <Th>Nº interno</Th>
              <Th>Nº tarjeta operación</Th>
            </Tr>
            {car.map((value, index) => {
              return (
                <Tr key={index}>
                  {/* Placa */}
                  <Td>{value.value}</Td>

                  {/* Marca */}
                  <Td>{value.value}</Td>

                  {/* Modelo */}
                  <Td>{value.value}</Td>

                  {/* Clase */}
                  <Td>{value.value}</Td>

                  {/* Capacidad */}
                  <Td>{value.value}</Td>

                  {/* Número interno */}
                  <Td>...</Td>

                  {/* Número de tarjeta de operación */}
                  <Td>...</Td>
                </Tr>
              )
            })}
          </Table>
        </section>
        <section>
          <TableTitle>CONDUCTOR</TableTitle>
          <Table>
            <Tr>
              <Th>Nombres y apellidos</Th>
              <Th>Nº Cédula</Th>
              <Th>Nº Licencia</Th>
              <Th>Vigencia</Th>
            </Tr>
            {driver.map((value, index) => {
              return (
                <Tr>
                  <Td>{value.value}</Td>
                  <Td>{value.value}</Td>
                  <Td>{value.value}</Td>
                  <Td>{value.value}</Td>
                </Tr>
              )
            })}
          </Table>
        </section>
        <section>
          <TableTitle>RESPONSABLE CONTRATANTE</TableTitle>
          <Table>
            <Tr>
              <Th>Nombres y apellidos</Th>
              <Th>Nº Cédula</Th>
              <Th>Telefono</Th>
              <Th>Dirección</Th>
            </Tr>
            <Tr>
              <Td>El contratante</Td>
              <Td>El contratante</Td>
              <Td>El contratante</Td>
              <Td>El contratante</Td>
            </Tr>
          </Table>
        </section>
      </DocumentMain>
      <DocumentFooter>
        <DocumentSection>
          <div>
            <DocumentSubTitle>DATOS DE CONTACTO DE LA EMPRESA</DocumentSubTitle>
            <DocumentInfo>
              Servicio especial A&G TOURS S.A.S <br />
              Bogotá PBX (57-1) 3112233 <br />
              Cel. 310 284 6000 <br />
              Email: agtours.sas@gmail.com www.aygtours.com
            </DocumentInfo>
          </div>
          <SignatureContainer>
            <DocumentSubTitle>FIRMA DEL REPRESENTANTE LEGAL</DocumentSubTitle>
            <div>
              <img src="" alt="La firma" />
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
