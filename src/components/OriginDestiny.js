import React from "react"
import { DocumentInfo, H2, P } from "../styles/components"

export default function OriginDestiny({ origin, destiny }) {
  return (
    <section className="Border-bottom Flex">
      <DocumentInfo className="Border-right W50">
        <H2>Origen: </H2>
        <P>{origin}</P>
      </DocumentInfo>
      <DocumentInfo className="W50">
        <H2>Destino: </H2>
        <P>{destiny}</P>
      </DocumentInfo>
    </section>
  )
}
