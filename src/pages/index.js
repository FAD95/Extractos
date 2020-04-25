import React, { useState } from "react"
import Form from "../components/Form"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "../components/GridEx"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Form></Form>
      <Grid></Grid>
    </Layout>
  )
}

export default IndexPage
