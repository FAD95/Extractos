import React from "react"
import { H2, Table, Th, Td } from "../styles/components"

export default function CarInformationTable({ car }) {
  return (
    <section className="Border-bottom">
      <H2 className="Border-bottom Text-center">
        CARACTERÍSTICAS DEL VEHICULO
      </H2>
      <section className="Border-bottom">
        <Table>
          <thead>
            <tr>
              <Th className="Border-right W25">Placa</Th>
              <Th className="Border-right W25">Marca</Th>
              <Th className="Border-right W25">Modelo</Th>
              <Th className="W25">Clase</Th>
            </tr>
          </thead>
          <tbody>
            {car.map((value, index) => {
              return (
                <tr key={index}>
                  {/* Placa */}
                  <Td className="Border-right W25">{value.value}</Td>

                  {/* Marca */}
                  <Td className="Border-right W25">{value.value}</Td>

                  {/* Modelo */}
                  <Td className="Border-right W25">{value.value}</Td>

                  {/* Clase */}
                  <Td className="W25">{value.value}</Td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </section>
      <Table>
        <thead>
          <tr>
            <Th className="Border-right W50">Nº interno</Th>
            <Th>Nº tarjeta operación</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Número interno */}
            <Td className="Border-right W50">...</Td>

            {/* Número de tarjeta de operación */}
            <Td>...</Td>
          </tr>
        </tbody>
      </Table>
    </section>
  )
}
