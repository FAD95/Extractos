import React from "react"
import {
  DocumentSection,
  H2,
  P,
  SignatureContainer,
  Signature,
  FooterImg,
  Small,
} from "../styles/components"
export default function DocumentFooter({ data }) {
  return (
    <footer>
      <DocumentSection className="Border-bottom">
        <div className="W100 M0">
          <H2>DATOS DE CONTACTO DE LA EMPRESA</H2>
          <P>
            Servicio especial A&G TOURS S.A.S <br />
            Bogotá PBX (57-1) 3112233 <br />
            Cel. 310 284 6000 <br />
            Email: agtours.sas@gmail.com www.aygtours.com
          </P>
        </div>
        <SignatureContainer className="Border-left">
          <H2>FIRMA DEL REPRESENTANTE LEGAL</H2>
          <div>
            <Signature
              src={data.allFile.edges[6].node.childImageSharp.original.src}
              alt="La firma"
            />
          </div>
          <Small>Firma Digital Ley 527 del 199, decreto 2364 de 2012</Small>
        </SignatureContainer>
      </DocumentSection>

      <section className="Flex Space-between Align-items-center">
        <div>
          <P>Verificación virtual?</P>
        </div>
        <div>
          <FooterImg
            src={data.allFile.edges[5].node.childImageSharp.original.src}
            alt="SUPERTRANSPORTE"
          />
        </div>
      </section>
    </footer>
  )
}
