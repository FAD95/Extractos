import React from "react"
import {
  DocumentHeader,
  DocumentHeaderInfo,
  DocumentHeaderDescription,
  HeaderImageContainer,
  HeaderImg,
  DocumentTitle,
  DocumentSubTitle,
} from "../styles/components"

export default function DocumentHeaderComponent({ data }) {
  const date = new Date()
  // var meses = new Array(
  //   "Enero",
  //   "Febrero",
  //   "Marzo",
  //   "Abril",
  //   "Mayo",
  //   "Junio",
  //   "Julio",
  //   "Agosto",
  //   "Septiembre",
  //   "Octubre",
  //   "Noviembre",
  //   "Diciembre"
  // )
  return (
    <DocumentHeader>
      <DocumentHeaderInfo className="Border-bottom">
        <HeaderImageContainer className="Border-right">
          {" "}
          <img
            src={data.allFile.edges[3].node.childImageSharp.original.src}
            alt=""
          />
        </HeaderImageContainer>
        <HeaderImageContainer className="Border-right">
          {" "}
          <HeaderImg
            src={data.allFile.edges[4].node.childImageSharp.original.src}
            alt=""
          />
        </HeaderImageContainer>

        <HeaderImageContainer>
          <HeaderImg
            src={data.allFile.edges[2].node.childImageSharp.original.src}
            alt=""
          />
        </HeaderImageContainer>
      </DocumentHeaderInfo>
      <DocumentHeaderDescription className="Border-bottom">
        <DocumentTitle>
          FORMATO UNICO DE EXTRACTO DEL CONTRATO DEL SERVICIO PUBLICO DE
          TRANSPORTE TERRESTRE AUTOMOTOR ESPECIAL
        </DocumentTitle>
        <DocumentSubTitle># 208005813{date.getFullYear()}</DocumentSubTitle>
      </DocumentHeaderDescription>
    </DocumentHeader>
  )
}
