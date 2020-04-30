import styled from "styled-components"

export const DocumentArticle = styled.article`
  border: 1px solid black;
  width: 816px;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  .Border-bottom {
    border-bottom: solid 1px black;
  }
  .Border-right {
    border-right: solid 1px black;
  }
  .Border-left {
    border-left: solid 1px black;
  }
  .Flex {
    display: flex;
  }
  .W25 {
    width: 25%;
  }
  .W50 {
    width: 50%;
  }
  .W100 {
    width: 100%;
  }
  .Text-center {
    text-align: center;
  }
  .Space-evenly {
    justify-content: space-evenly;
  }
  .Space-between {
    justify-content: space-between;
  }
  .M0 {
    margin: 0;
  }
  .Align-items-center {
    align-items: center;
  }
  .Padding-right {
    padding-right: 2em;
  }
  .Margin-left-auto {
    margin-left: auto;
  }
`
export const DocumentInfo = styled.div`
  display: flex;
  align-items: center;
`

export const DocumentSection = styled.section`
  display: flex;
  align-items: center;
`

export const H1 = styled.h1`
  font-size: 16px;
`
export const H2 = styled.h2`
  font-size: 14px;
  margin: 0 5px 0 0;
`
export const H3 = styled.h3`
  font-size: 14px;
  margin: 0;
  padding: 0;
`
export const P = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`
export const Small = styled.small`
  font-size: 11px;
  margin: 0;
  padding: 0;
`
export const HeaderImageContainer = styled.div`
  width: 272px;
`
export const HeaderImg = styled.img`
  width: 82px;
`
export const Table = styled.table`
  width: 100%;
  margin: 0;
`
export const Th = styled.th`
  font-size: 14px;
  text-align: center;
  padding: 0;
  margin: 0;
`
export const Td = styled.td`
  font-size: 12px;
  text-align: center;
  padding: 0;
  margin: 0;
`
export const FooterImg = styled.img`
  margin: 0;
  width: 80px;
`
export const SignatureContainer = styled.div`
  width: 800px;
  text-align: center;
`
export const Signature = styled.img`
  width: 250px;
  margin: 0;
`
