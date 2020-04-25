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
      <DocumentHeaderInfo>
        <HeaderImageContainer>
          {" "}
          <img
            src={data.allFile.edges[3].node.childImageSharp.original.src}
            alt=""
          />
        </HeaderImageContainer>
        <HeaderImageContainer>
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
      <DocumentHeaderDescription>
        <DocumentTitle>
          Ficha técnica del formato único del extracto de contrato "FUEC"
          servico público de transporte terrestre automotor especial FICHA
        </DocumentTitle>
        <DocumentSubTitle>
          # 208005813 {date.getFullYear()} 0123 0681
        </DocumentSubTitle>
      </DocumentHeaderDescription>
    </DocumentHeader>
  )
}
