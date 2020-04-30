import React from "react"
import { H2, Table, Th, Td } from "../styles/components"

export default function ContractorTable() {
  return (
    <section className="Border-bottom">
      <H2 className="Border-bottom Text-center">RESPONSABLE CONTRATANTE</H2>
      <Table>
        <thead>
          <tr>
            <Th className="Border-right">Nombres y apellidos</Th>
            <Th className="Border-right">Nº Cédula</Th>
            <Th className="Border-right">Telefono</Th>
            <Th>Dirección</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td className="Border-right">El contratante</Td>
            <Td className="Border-right">El contratante</Td>
            <Td className="Border-right">El contratante</Td>
            <Td>El contratante</Td>
          </tr>
        </tbody>
      </Table>
    </section>
  )
}
