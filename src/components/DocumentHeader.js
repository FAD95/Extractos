import React from "react"
import { HeaderImageContainer, HeaderImg, H1, H2 } from "../styles/components"

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
    <header>
      <section className="Border-bottom Flex Space-evenly">
        <HeaderImageContainer className="Border-right Text-center">
          {" "}
          <img
            className="M0"
            src={data.allFile.edges[3].node.childImageSharp.original.src}
            alt=""
          />
        </HeaderImageContainer>
        <HeaderImageContainer className="Border-right Text-center">
          {" "}
          <HeaderImg
            className="M0"
            src={data.allFile.edges[4].node.childImageSharp.original.src}
            alt=""
          />
        </HeaderImageContainer>
        <HeaderImageContainer className="Text-center">
          <HeaderImg
            className="M0"
            src={data.allFile.edges[2].node.childImageSharp.original.src}
            alt=""
          />
        </HeaderImageContainer>
      </section>
      <section className="Border-bottom Text-center">
        <H1>
          FORMATO UNICO DE EXTRACTO DEL CONTRATO DEL SERVICIO PUBLICO DE
          TRANSPORTE TERRESTRE AUTOMOTOR ESPECIAL
        </H1>
        <H2># 208005813{date.getFullYear()}</H2>
      </section>
    </header>
  )
}
