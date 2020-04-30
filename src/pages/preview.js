import React from "react"
import { graphql } from "gatsby"
import { DocumentArticle } from "../styles/components"
import DocumentHeaderComponent from "../components/DocumentHeader"
import MainInformation from "../components/MainInformation"
import OriginDestiny from "../components/OriginDestiny"
import ContractType from "../components/ContractType"
import ValidityTable from "../components/ValidityTable"
import CarInformationTable from "../components/CarInformationTable"
import DriversInformationTable from "../components/DriversInformationTable"
import ContractorTable from "../components/ContractorTable"
import DocumentFooter from "../components/DocumentFooter"
export const query = graphql`
  query GET_DATA {
    allFile {
      edges {
        node {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`

export default function Preview({ location, data }) {
  const { state = {} } = location
  const {
    driver,
    car,
    client,
    origin,
    destiny,
    startDate,
    finishDate,
    contractObjective,
  } = state

  return (
    <DocumentArticle>
      <DocumentHeaderComponent data={data} />
      <main>
        <MainInformation
          client={client}
          contractObjective={contractObjective}
        />
        <OriginDestiny origin={origin} destiny={destiny} />
        <ContractType />
        <ValidityTable startDate={startDate} finishDate={finishDate} />
        <CarInformationTable car={car} />
        <DriversInformationTable driver={driver} />
        <ContractorTable />
      </main>
      <DocumentFooter data={data} />
    </DocumentArticle>
  )
}
