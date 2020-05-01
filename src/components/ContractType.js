import React from "react"
import { DocumentInfo, H2, P, TypeLabel } from "../styles/components"

export default function ContractType() {
  return (
    <section className="Border-bottom Flex Ali">
      <DocumentInfo className="Border-right Flex Padding-x">
        <TypeLabel htmlFor="">Convenio</TypeLabel>
        <input type="checkbox" id="checkbox" />
      </DocumentInfo>
      <DocumentInfo className="Border-right Flex Padding-x">
        <TypeLabel htmlFor="">
          <P>Consorcio</P>
        </TypeLabel>
        <input type="checkbox" id="checkbox" />
      </DocumentInfo>
      <DocumentInfo className="Border-right Flex Padding-x">
        <TypeLabel htmlFor="">
          <P> Union Temporal</P>
        </TypeLabel>
        <input type="checkbox" id="checkbox" />
      </DocumentInfo>
      <DocumentInfo>
        <H2>Con:</H2>
        <P>...</P>
      </DocumentInfo>
    </section>
  )
}
