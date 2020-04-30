import React from "react"
import { DocumentInfo, H2, P } from "../styles/components"

export default function ContractType() {
  return (
    <section className="Border-bottom Flex Ali">
      <DocumentInfo className="Border-right Flex">
        <label htmlFor="">
          <P>Convenio</P>
        </label>
        <input type="checkbox" id="checkbox" />
      </DocumentInfo>
      <DocumentInfo className="Border-right Flex">
        <label htmlFor="">
          <P>Consorcio</P>
        </label>
        <input type="checkbox" id="checkbox" />
      </DocumentInfo>
      <DocumentInfo className="Border-right Flex">
        <label htmlFor="">
          <P> Union Temporal</P>
        </label>
        <input type="checkbox" id="checkbox" />
      </DocumentInfo>
      <DocumentInfo>
        <H2>Con:</H2>
        <P>...</P>
      </DocumentInfo>
    </section>
  )
}
