import React from "react"
import { H2, Table, Th, Td } from "../styles/components"

export default function DriversInformationTable({ driver }) {
  return (
    <section className="Border-bottom">
      <H2 className="Border-bottom Text-center">CONDUCTOR</H2>
      <Table>
        <thead>
          <tr>
            <Th className="Border-right">Conductores</Th>
            <Th className="Border-right">Nombres y apellidos</Th>
            <Th className="Border-right">Nº Cédula</Th>
            <Th className="Border-right">Nº Licencia</Th>
            <Th>Vigencia</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Th className="Border-right">Conductor 1</Th>
            <Td className="Border-right">{driver[0].value}</Td>
            <Td className="Border-right">{driver[0].value}</Td>
            <Td className="Border-right">{driver[0].value}</Td>
            <Td>{driver[0].value}</Td>
          </tr>
          <tr>
            <Th className="Border-right">Conductor 2</Th>
            <Td className="Border-right">{driver[0].value}</Td>
            <Td className="Border-right">{driver[0].value}</Td>
            <Td className="Border-right">{driver[0].value}</Td>
            <Td>{driver[0].value}</Td>
          </tr>
          <tr>
            <Th className="Border-right">Conductor 3</Th>
            <Td className="Border-right">{driver[0].value}</Td>
            <Td className="Border-right">{driver[0].value}</Td>
            <Td className="Border-right">{driver[0].value}</Td>
            <Td>{driver[0].value}</Td>
          </tr>
        </tbody>
      </Table>
    </section>
  )
}
