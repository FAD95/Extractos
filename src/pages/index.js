import React, { useState } from "react"
import Form from "../components/Form"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Form></Form>
    </Layout>
  )
}

export default IndexPage
