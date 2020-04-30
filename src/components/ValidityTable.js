import React from "react"
import { H2, H3, Table, Th, Td } from "../styles/components"

export default function ValidityTable({ startDate, finishDate }) {
  return (
    <section className="Border-bottom">
      <H2 className="Border-bottom Text-center">VIGENCIA DEL CONTRATO</H2>
      <section className="Flex">
        <div className="Border-right W50 Text-center">
          <H3 className="Border-bottom">Fecha inicial</H3>
          <Table className="M0">
            <thead>
              <tr>
                <Th className="Border-right">Día</Th>
                <Th className="Border-right">Mes</Th>
                <Th>Año</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td className="Border-right">{startDate.slice(8, 10)}</Td>
                <Td className="Border-right">{startDate.slice(5, 7)}</Td>
                <Td>{startDate.slice(0, 4)}</Td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="W50 Text-center">
          <H3 className="Border-bottom">Fecha de vencimiento</H3>
          <Table className="M0">
            <thead>
              <tr>
                <Th className="Border-right">Día</Th>
                <Th className="Border-right">Mes</Th>
                <Th>Año</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td className="Border-right">{finishDate.slice(8, 10)}</Td>
                <Td className="Border-right">{finishDate.slice(5, 7)}</Td>
                <Td>{finishDate.slice(0, 4)}</Td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </section>
  )
}
