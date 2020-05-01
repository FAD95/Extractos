import React from "react"
import { DocumentInfo, H2, P } from "../styles/components"

export default function MainInformation({ client, contractObjective }) {
  return (
    <>
      <section className="Border-bottom Flex">
        <DocumentInfo className="">
          <H2>Razón social:</H2>
          <P>Servicio especial A&G TOURS S.A.S</P>
        </DocumentInfo>
        <DocumentInfo className="Padding-right Margin-left-auto Border-left">
          <H2>NIT:</H2>
          <P>900.461.010-6</P>
        </DocumentInfo>
      </section>
      <section className="Border-bottom">
        <DocumentInfo>
          <H2>Contrato Nº: </H2>
          <P>...</P>
        </DocumentInfo>
      </section>
      <section className="Border-bottom Flex">
        <DocumentInfo>
          <H2>Contratante: </H2>
          <P>{client}</P>
        </DocumentInfo>
        <DocumentInfo className="Padding-right Margin-left-auto Border-left">
          <H2>C.C: </H2>
          <P>900.461.010-6</P>
        </DocumentInfo>
      </section>
      <section className="Border-bottom Flex">
        <DocumentInfo>
          <H2>Objeto del contrato: </H2>
          <P>{contractObjective}</P>
        </DocumentInfo>
      </section>
    </>
  )
}
