import React from "react"
import { H2, H3, Table, Th, Td } from "../styles/components"

export default function OriginDestiny({ origin, destiny }) {
  return (
    <section className="Border-bottom">
      <H2 className="Border-bottom Text-center">Origen - Destino</H2>
      <section className="Flex">
        <div className="Border-right W50 Text-center">
          <Table className="M0">
            <thead>
              <tr>
                <Th className="Border-bottom">Origen</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>{origin}</Td>
              </tr>
              <tr>
                <Td>{origin}</Td>
              </tr>
              <tr>
                <Td>{origin}</Td>
              </tr>
              <tr>
                <Td>{origin}</Td>
              </tr>
              <tr>
                <Td>{origin}</Td>
              </tr>
              <tr>
                <Td>{origin}</Td>
              </tr>
              <tr>
                <Td>{origin}</Td>
              </tr>
              <tr>
                <Td>{origin}</Td>
              </tr>
              <tr>
                <Td>{origin}</Td>
              </tr>
              <tr>
                <Td>{origin}</Td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="W50 Text-center">
          <Table className="M0">
            <thead>
              <tr>
                <Th className="Border-bottom">Destino</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>{destiny}</Td>
              </tr>
              <tr>
                <Td>{destiny}</Td>
              </tr>
              <tr>
                <Td>{destiny}</Td>
              </tr>
              <tr>
                <Td>{destiny}</Td>
              </tr>
              <tr>
                <Td>{destiny}</Td>
              </tr>
              <tr>
                <Td>{destiny}</Td>
              </tr>
              <tr>
                <Td>{destiny}</Td>
              </tr>
              <tr>
                <Td>{destiny}</Td>
              </tr>
              <tr>
                <Td>{destiny}</Td>
              </tr>
              <tr>
                <Td>{destiny}</Td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </section>
    // {/* <section className="Border-bottom Flex">
    //   <DocumentInfo className="Border-right W50">
    //     <H2>Origen: </H2>
    //     <P>{origin}</P>
    //   </DocumentInfo>
    //   <DocumentInfo className="W50">
    //     <H2>Destino: </H2>
    //     <P>{destiny}</P>
    //   </DocumentInfo>
    // </section> */}
  )
}
